/**********************************************************
 * Setup express */
var express = require('express');
var app = express();

// Api Route Setup
var apiRoutes = express.Router();

// Logging Setup
var morgan = require('morgan');
app.use(morgan('dev'));

// Security setup
var helmet = require('helmet');
app.use(helmet());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var jwt = require('jsonwebtoken');

var config = require('../configs/gearGooberConfig.js')
app.set('superSecret', config.secret);

// Static file setup
app.use(express.static('public'));
console.log('Serving static files from "public"');

// Validators
const isMongoId = require('validator/lib/isMongoId')

// Immutable Date
const Immutable = require('immutable')

/**********************************************************
 * Setup mongo db */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var testUrl = config.database;
MongoClient.connect(testUrl, function(err, db) {
    assert.equal(null, err);
    console.log('Connected correctly to mongo server.');
    db.close();
});

/**********************************************************
 * Setup mongoose */
var mongoose = require('mongoose');
var bluebird = require('bluebird');
mongoose.Promise = bluebird;
mongoose.connect(config.database);
var Schema = mongoose.Schema;

/**********************************************************
 * Models */

// tennant model
var Tennant = mongoose.model('Tennant', new Schema({
    name: String,
    subdomain: String,
    colorTheme: String
}));

// user model
var User = mongoose.model('User', new Schema({
    tennantId: {type: mongoose.Schema.Types.ObjectId, ref: Tennant, index: true},
    email: {type: String, index: true},
    firstName: {type: String, text: true}, // creates a text index
    lastName: {type: String, text: true},
    imageUrl: String,
    phoneNumber: String,
    addressOne: String,
    addressTwo: String,
    city: String,
    state: String,
    zip: String,
    password: String,
    admin: Boolean,
    manager: Boolean,
    labAssistant: Boolean
}));

// equipment
var Equipment = mongoose.model('Equipment', new Schema({
    tennantId: {type: mongoose.Schema.Types.ObjectId, ref: Tennant, index: true},
    name: {type: String, text: true}, // creates a text index
    category: {type: mongoose.Schema.Types.ObjectId, ref: Category, index: true},
    imageUrl: String,
    mfg: {type: String, text: true},
    model: {type: String, text: true},
    price: Number,
    qty: Number,
    inKit: Boolean,
    barcodes: [{
        barcode: {type: String, text: true},
        checkedIn: Boolean,
        damaged: Boolean,
        missing: Boolean
    }]
}));

// categories
var Category = mongoose.model('Category', new Schema({
  tennantId: {type: mongoose.Schema.Types.ObjectId, ref: Tennant, index: true},
  name: String,
  parent: {type: mongoose.Schema.Types.ObjectId, ref: Category}
}));

/**********************************************************
 * Routes */
app.get('/setup', function (req, res) {

    // load demo data into memory
    let demoDataTennant = require('./demo_data/demo_tennant.json');
    let demoDataUser = require('./demo_data/demo_user.json');
    let demoDataCategories = require('./demo_data/demo_categories.json')
    let demoDataEquipment = require('./demo_data/demo_equipment.json'); // an array of equipment models: {"data":[...]}

    // create sample tennant
    var demoU = new Tennant(demoDataTennant);

    demoU.save(function (err, tennant){
        if (err) return handleError(err, res);

        // create sample user
        var bob = new User(demoDataUser);
        bob.tennantId = tennant._id;

        bob.save(function (err) {
            if (err) return handleError(err, res);
        });

        // create sample categories
        var categories = Immutable.Map();
        var subCats = Immutable.Map();
        for (c=0; c < demoDataCategories["data"].length; c++) {
          var category = new Category(demoDataCategories["data"][c]);
          category.tennantId = tennant._id;
          category.save((err, category) => {
            if (err) return handleError(err, res);
            try {
              assert(typeof(category) === 'object')
              categories = categories.set(category.name, category)
              var subCatArray = categories.get(category.name).get('subCategories')
              assert(Array.isArray(subCatArray))

            } catch (e) {
              return handleError(e, res);
            }
          });
        }

        // create sample equipment
        setTimeout(() => {
          for (e=0; e < demoDataEquipment["data"].length; e++) {
            var pieceOfEquipment = new Equipment(demoDataEquipment["data"][e]);
            pieceOfEquipment.tennantId = tennant._id;

            try {
              pieceOfEquipment.categoryId = categories.get(pieceOfEquipment.category).get('_id')
            } catch (e) {
              return handleError(e, res)
            }

            /*if (pieceOfEquipment.subCategory) {
              try {
                pieceOfEquipment.subCategoryId = categories.getIn([pieceOfEquipment.category, 'subCategories']).get('_id')
              } catch (e) {
                return handleError(e, res)
              }
            }*/

            pieceOfEquipment.save(function (err) {
                if (err) return handleError(err, res);
            });
        }
      }, 2000)

        return res.json({ success: true, message: "Demo Data has been populated in the db" });
    });

});

/**********************************************************
 * API Routes */

// route to authenticate a user (POST http://localhost:3000/api/auth)
apiRoutes.post('/auth', function(req, res) {
    // find the user
    User.findOne({
        email: req.body.email
    }, function(err, user) {

        if (err) throw err;
        if (!user) {

            res.status(403).send({ success: false, message: 'Bad Username or Password'});
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.status(403).send({ success: false, message: 'Bad Username or Password'})
            } else {
                // if user is found and password is correct
                // create a token
                var token = jwt.sign(user, app.get('superSecret'), {
                    expiresIn: 86400 // expires in 24 hours
                });

                // return the information including token as JSON
                return res.json({ data: [ token, user ]});
            }
        }
    });
});

// route middleware to verify a token
apiRoutes.use(function(req, res, next) {

    // check header for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    //decode token
    if (token) {

        // verifies secret and checks expires
        jwt.verify(token, app.get('superSecret'), function(err, decodedToken) {
            if (err) {
                if (err.name == 'TokenExpiredError') return res.status(418).send({ success: false, message: 'Token expired'});
                return res.status(403).send({ success: false, message: 'Failed to authenticate token'});
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decodedToken;
                console.log("Recieved a JWT for this request");
                next();
            }
        });
    } else {
        // there is no token
        console.log('token: ' + token);
        return res.status(401).send({ success: false, message: 'The request has not been authenticated'});
    }

});
// GET: /api/
// route to show a random message
apiRoutes.get('/', function(req, res) {
    res.json({ message: 'Welcome to the GearGoober API!' });
});
//////// Tennant //////////
// GET: /api/tennant/:tennantId/:query
// route to return tennant data based on a query
apiRoutes.get('/tennant/:tennantId/:query', function(req, res) {

    var query = JSON.parse(req.params.query);
    let tennantId = req.params.tennantId;
    query.tennantId = tennantId;

    Tennant.find(query, function(err, results){
        // handle error
        if (err) return handleError(err, res);
        // return results
        return res.json({data: results});

    });
});
//////// Users //////////
// GET: /api/users
// route to return all users
apiRoutes.get('/users', function(req, res) {
    User.find({}, function(err, users) {
        return res.json(users);
    });
});
//////// Equipment and Kits //////////
// GET: /api/equipment/:query
// route to return an array {data:[...]} of equipment and kits based on a query
apiRoutes.get('/search/equipment/:query/:tennantId', function(req, res) {

  let query = req.params.query;
  let tennantId = req.params.tennantId;
  let upperLim = 10; // TODO: Infinte Scroll Index Number

  Equipment.find({ $text: {$search: query}, tennantId: tennantId })
          .limit(upperLim)
          .select('name imageUrl mfg model price inKit')
          .exec(function(err, results){
              // handle error
              if (err) return handleError(err, res);
              // validate results
              assert(Array.isArray(results));
              // return results
              return res.json({data: results});
  });
});
apiRoutes.get('/details/equipment/:equipId/:tennantId', function(req, res) {

  let equipId = req.params.equipId;
  let tennantId = req.params.tennantId;

  // validate id
  if (!isMongoId(equipId)) {
    return handleError('Invalid id', res)
  }

  Equipment.findOne({ _id: equipId, tennantId: tennantId })
          .exec(function(err, result){
              // handle error
              if (err) return handleError(err, res);
              // validate results
              try {
                assert(typeof(result) === 'object');
              } catch (e) {
                return handleError(e, res);
              }
              return res.json({data: result});
          });
});
// GET: /api/equipment/categories/:tennantId/:query
// route to return an array {data:[...]} of equipment categories based on a query
apiRoutes.get('/all/categories/:query/:tennantId', function(req, res) {

    const tennantId = req.params.tennantId;

    Category.find({}, function(err, results) {
      // handleError
      if (err) return handleError(err, res);
      // validate results
      try {
        assert(Array.isArray(results));
      } catch (e) {
        return handleError(e, res);
      }
      // return results
      return res.json({data: results})
    })
});
/**
 * GET: /api/suggest
 *
 * @param {String} tennantId
 * @param {JSON} query
 *
 * @returns {Array} - array of <= 10 document objects
 */
apiRoutes.get('/suggest/equipment/:query/:tennantId', function(req, res) {

    let query = req.params.query;
    let tennantId = req.params.tennantId;
    let upperLim = 10;

    Equipment.find({ $text: {$search: query}, tennantId: tennantId })
            .limit(upperLim)
            .select('name')
            .exec(function(err, results){
                // handle error
                if (err) return handleError(err, res);
                // validate results
                assert(Array.isArray(results));
                // return results
                return res.json({data: results});
            });

});
//////// Error Handler //////////
function handleError(error, res) {
    console.log(error);
    return res.status(500).json({ success: false, message: 'Server error: ' + error});
}
/**********************************************************
 * Start app*/
app.use('/api', apiRoutes);
app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
