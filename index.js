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

// user
var User = mongoose.model('User', new Schema({
    email: String,
    firstName: String,
    lastName: String,
    imageUrl: String,
    title: String,
    phoneNumber: String,
    addressOne: String,
    addressTwo: String,
    city: String,
    state: String,
    zip: String,
    password: String,
    admin: Boolean,
    instructor: Boolean,
    labWorker: Boolean
}));

/**********************************************************  
 * Routes */
app.get('/setup', function (req, res) {
    
    // create sample user
    var bob = new User({
        email: 'bob@demo.edu',
        firstName: 'Bob',
        lastName: 'Smith',
        title: 'Systems Administrator',
        imageUrl: 'https://randomuser.me/api/portraits/men/78.jpg',
        phoneNumber: '555-123-4567',
        addressOne: '901 S. Sunshine Ave.',
        addressTwo: 'Suite 1B',
        city: 'Middleton',
        state: 'MO',
        zip: '62892',
        password: 'password',
        admin: true,
        instructor: false,
        labWorker: false
    });

    bob.save(function(err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({ success: true });
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
                res.json({
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
    var token = req.headers['x-access-token'];

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
                next();
            }
        });
    } else {
        // there is no token
        return res.status(401).send({ success: false, message: 'The request has not been authenticated'});
    }

});

// route to show a random message (GET http://localhost:3000/api/)
apiRoutes.get('/', function(req, res) {
    res.json({ message: 'Welcome to the GearGoober API!' });
});

//////// Users //////////
// route to return all users (GET http://localhost:3000/api/users)
apiRoutes.get('/users', function(req, res) {
    User.find({}, function(err, users) {
        res.json(users);
    });
});

/********************************************************** 
 * Start app*/
app.use('/api', apiRoutes);
app.listen(3000, function () {
    console.log('App listening on port 3000!');
});