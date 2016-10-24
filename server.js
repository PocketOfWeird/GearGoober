/**********************************************************
 * Setup */
const express = require('express');
let app = express();

// Configuation file
const config = require('../.configs/.gearGooberConfig.js')

// Security: Helmet
app.set('host', config.host)
const helmetSetup = require('./.server_modules/helpers/helmetSetup')
app.use(helmetSetup(app.get('host')))
// Security: Body Parser
app.use(require('body-parser').json());
// Security: Content Length Validator
const contentLength = require('express-content-length-validator')
app.use(contentLength.validateMax())
// Security: JWT
app.set('secret', config.secret)
app.set('algorithm', config.algorithm)
// Security: TODO: Add express-enforces-ssl

// Setup Environment
app.set('environment', config.environment)
const env = process.env.NODE_ENV = app.get('environment')
const runningAs = process.argv[2] // 'production' or 'demo'
app.set('database', config.database)
app.set('port', config.port)
if (runningAs === 'demo') {
  app.set('database', config.demoDatabase)
  app.set('port', config.demoPort)
}

// Logging Setup
const loggingSetup = require('./.server_modules/helpers/loggingSetup')
app.use(loggingSetup(env))

// Static file setup
app.use(express.static('public'));
console.log('Serving static files from "public"');

// Validators
const isMongoId = require('validator/lib/isMongoId')

// Immutable Data
const Immutable = require('immutable')

/**********************************************************
 * Test Mongo Setup */
require('mongodb').MongoClient.connect(app.get('database'), (err, db) => {
  require('assert').equal(null, err)
  console.log('Connected correctly to the db')
  db.close()
})

/**********************************************************
 * Setup mongoose */
let mongoose = require('mongoose')
const bluebird = require('bluebird')
mongoose.Promise = bluebird

// demo data or production data setup
if (runningAs === 'demo') {
  const setupDemoData = require('./.server_modules/routes/setupDemoData')
  app.get('/setup', setupDemoData(app.get('database'), runningAs))
} else {
  mongoose.connect(app.get('database'))
}

/**********************************************************
 * Models */
let Tennant = require('./.server_modules/models/tennant')
let User = require('./.server_modules/models/user')
let Category = require('./.server_modules/models/category')
let Equipment = require('./.server_modules/models/equipment')

/**********************************************************
 * Routes */

/**********************************************************
 * API Routes */

// Api Route Setup
let apiRoutes = express.Router()

// route to authenticate a user and get a token (POST /api/auth)
const apiAuthRoute = require('./.server_modules/routes/api/auth')
apiRoutes.post('/auth', apiAuthRoute(app.get('secret'), app.get('algorithm')))

// Add middleware to any apiRoutes defined below
// Order is important!
const tokenMiddleware = require('./.server_modules/middleware/token')
apiRoutes.use(tokenMiddleware(app.get('secret'), app.get('algorithm')))
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

})
/**********************************************************
 * Start app*/
app.use('/api', apiRoutes)
app.listen(app.get('port'),
() => console.log('App listening on port ' + app.get('port')))
