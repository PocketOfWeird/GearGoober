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
    tennantId: String,
    email: String,
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
    tennantId: String,
    name: {type: String, text: true}, // creates a text index
    category: String,
    subCategory: String,
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

/**********************************************************
 * Routes */
app.get('/setup', function (req, res) {

    // load demo data into memory
    var demoDataTennant = require('./demo_data/demo_tennant.json');
    var demoDataUser = require('./demo_data/demo_user.json');
    var demoDataEquipment = require('./demo_data/demo_equipment.json'); // an array of equipment models: {"data":[...]}

    // create sample tennant
    var demoU = new Tennant(demoDataTennant);

    demoU.save(function (err, tennant){
        if (err) throw err;

        // create sample user
        var bob = new User(demoDataUser);
        bob.tennantId = tennant._id;

        bob.save(function (err) {
            if (err) throw err;
        });

        // create sample equipment
        for (e=0; e < demoDataEquipment["data"].length; e++) {
            var pieceOfEquipment = new Equipment(demoDataEquipment["data"][e]);
            pieceOfEquipment.tennantId = tennant._id;

            pieceOfEquipment.save(function (err) {
                if (err) throw err;
            });
        }

        res.json({ success: true, message: "Demo Data has been populated in the db" });
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
apiRoutes.get('/equipment/:tennantId/:query', function(req, res) {
    var query = JSON.parse(req.params.query);
    Equipment.find(query, function(err, equipment) {
        if (err) return handleError(err, res);
        return res.json({data: equipment});
    });
});
// GET: /api/equipment/categories/:tennantId/:query
// route to return an array {data:[...]} of equipment categories based on a query
apiRoutes.get('/equipment/categories/:tennantId/:query', function(req, res) {

    var query = JSON.parse(req.params.query);
    var tennantId = req.params.tennantId;
    query.tennantId = tennantId;

    Equipment.aggregate(
        { $match: query }, // where equipment = query
        { $group: {_id:{category: "$category", subCategory: "$subCategory"}} }, // removes duplicate results
        { $project: {_id:0, category:"$_id.category", subCategory:"$_id.subCategory"} } // cleans up the output
    ).exec(function (err, categories) {
                // handle error
                if (err) return handleError(err, res);
                // validate results
                assert(Array.isArray(categories));
                // group subCategories under each parent category
                var grouped = {}; // placeholder object
                for (i=0; i < categories.length; i++) { // loop through results
                    cat = categories[i]; // current category object
                    if (!grouped[cat.category]) { // if category is not in the placeholder object
                        grouped[cat.category] = { category: cat.category, subCategory: [], subCategoryCheck: {} }; // add the category to the placeholder object
                        if (cat.subCategory) { // if a subCategory exists
                            grouped[cat.category]["subCategoryCheck"][cat.subCategory] = true; // add the subCategory to the placeholder object
                            grouped[cat.category]["subCategory"].push(cat.subCategory); // and push it into the subCategory array
                        }
                    } else { // the category is in the placeholder object
                        if (cat.subCategory) { // if a subCategory exists
                            if (!grouped[cat.category]["subCategoryCheck"][cat.subCategory]) { // if the subCategory is not in the placeholder object
                                grouped[cat.category]["subCategoryCheck"][cat.subCategory] = true; // add the subCategory to the placeholder object
                                grouped[cat.category]["subCategory"].push(cat.subCategory); // push it into the array
                            }
                        }
                    }
                }
                // covert grouped object to an array
                var groupedArray = [];
                for (key in grouped) {
                    groupedArray.push(grouped[key]);
                }
                console.log(groupedArray);
                // return results
                return res.json({data: groupedArray});
    });
});
/**
 * GET: /api/suggest
 *
 * @param {String} tennantId
 * @param {JSON} query
 *
 * @returns {Array} - array of <= 10 document objects
 */
apiRoutes.get('/suggest/:tennantId/:query', function(req, res) {

    var query = JSON.parse(req.params.query);
    var tennantId = req.params.tennantId;
    query.tennantId = tennantId;

    var upperLim = 10;

    Equipment.find(query)
            .limit(upperLim)
            .select('name')
            .exec(function(err, results){
                // handle error
                if (err) return handleError(err, res);
                // validate results
                assert(Array.isArray(results));
                // check array length
                if (results.length < 1) {
                    // TODO: run query on Reservations collection
                }
                // return results
                return res.json({data: results});
            });

});
//////// Error Handler //////////
function handleError(error, res) {
    console.log(error);
    return res.status(500).send({ success: false, message: 'Server error: ' + error});
}
/**********************************************************
 * Start app*/
app.use('/api', apiRoutes);
app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
