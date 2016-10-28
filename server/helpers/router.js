'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auth = require('./routes/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setupRoutes = function setupRoutes(app, store) {

  // route to authenticate a user and get a token (POST /api/auth)
  app.post('/auth', (0, _auth2.default)(Object.assign({}, { users: store.getState().users }, { lookupUsers: store.getState().lookup.users }), store.dispatch, app.get('secret'), app.get('algorithm')));
};

exports.default = setupRoutes;