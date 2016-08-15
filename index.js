/********************************************************** 
 * Setup express */
var express = require('express');
var app = express();
// Security setup
var helmet = require('helmet');
app.use(helmet());
// Static file setup
app.use(express.static('public'));
console.log('Serving static files from "public"');

/**********************************************************
 * Setup mongo db */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var testUrl = 'mongodb://localhost:27017/test';
MongoClient.connect(testUrl, function(err, db) {
    assert.equal(null, err);
    console.log('Connected correctly to mongo server.');
    db.close();
});




/**********************************************************  
 * Urls */
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.put('/user', function(req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/user', function(req, res) {
    res.send('Got a DELETE request at /user');
});

/********************************************************** 
 * Start app*/
app.listen(3000, function () {
    console.log('App listening on port 3000!');
});