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
    firstName: String,
    lastName: String,
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
    name: String,
    categories: String,
    subCategories: String,
    imageUrl: String,
    mfg: String,
    model: String,
    price: Number,
    qty: Number,
    inKit: Boolean,
    barcodes: [{
        barcode: String,
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
                // if user is found and password is correctly
                // create a token
                var token = jwt.sign(user, app.get('superSecret'), {
                    expiresIn: 86400 // expires in 24 hours
                });

                // return the information including token as JSON
                return res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token,
                    user: user
                });
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
// GET: /api/tennant/:id
// route to return a specified tennant
apiRoutes.get('/tennant/:id', function(req, res) {
    Tennant.findOne({'_id': req.params.id }, function(err, tennant){
        if (err) return handleError(err, res);
        if (!tennant) return res.status(500).send({ success: false, message: 'Did not find tennant'});

        return res.json({success: true, tennant: tennant});

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
apiRoutes.get('/equipment/:query', function(req, res) {
    var query = JSON.parse(req.params.query);
    Equipment.find(query, function(err, equipment) {
        if (err) return handleError(err, res);
        return res.json({data: equipment});
    });
});
// GET: /api/equipment/categories/
// route to return an object { data:{...} }} of category objects {"name": "", "subCategories": ["",""], "subCatCheck": {"<categoryName>": true}}
apiRoutes.get('/equipment/categories/:tennantId/:query', function(req, res) {
    
    var query = JSON.parse(req.params.query);
    var tennantId = req.params.tennantId;
    query.tennantId = tennantId; 

    Equipment.find(query,'category subCategory', function(err, categories) {
        if (err) return handleError(err, res);
        console.log(categories);
        // main object to return
        var allCatsObject = {};
        // for each category in the db array of categories
        for (i=0; i < categories.length; i++) {
            // if this is the first instance of the category
            if (!allCatsObject[categories[i].category]) {
                // add it to the main object
                allCatsObject[categories[i].category]["name"] = categories[i].category;
                // if the subCategory property is not ""
                if (categories[i].subCategory) {
                    // add it to category's instance in the main object
                    allCatsObject[categories[i].category]["subCatCheck"][categories[i].subCategory] = true;
                    // initialize the subCategories array and push the subCategory
                    allCatsObject[categories[i].category]["subCategories"] = [];
                    allCatsObject[categories[i].category]["subCategories"].push(categories[i].subCategory);
                }
                // this is not the first time the loop has seen this category
            } else {
                // if the subCategory property is not "" and has not already been added to the category object
                if (categories[i].subCategory && !allCatsObject[categories[i].category]["subCatCheck"][categories[i].subCategory]) {
                        // add it to category's instance in the main object
                        allCatsObject[categories[i].category]["subCatCheck"][categories[i].subCategory] = true;
                        // if the subCategories array has not been initialized
                        if (!allCatsObject[categories[i].category]["subCategories"]) {
                            // initialize it
                            allCatsObject[categories[i].category]["subCategories"] = [];
                        } else {
                            // add the subCategory to the array
                            allCatsObject[categories[i].category]["subCategories"].push(categories[i].subCategory);
                        }
                } // elsewise skip it
            }
        } // end of for loop
        console.log(allCatsObject);
        return res.json({data: allCatsObject});

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