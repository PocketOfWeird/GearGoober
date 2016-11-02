'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auth = require('../routes/auth');

var _auth2 = _interopRequireDefault(_auth);

var _data = require('../routes/data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setupRoutes = function setupRoutes(app, store) {

  // route to authenticate a user and get a token (POST /api/auth)
  app.post('/auth', (0, _auth2.default)(store));
  app.post('/data', (0, _data2.default)(store));
};

exports.default = setupRoutes;