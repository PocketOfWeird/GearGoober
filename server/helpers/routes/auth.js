'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _isEmail = require('validator/lib/isEmail');

var _isEmail2 = _interopRequireDefault(_isEmail);

var _hashers = require('../hashers');

var _error = require('../error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bad = function bad(res) {
  return (0, _error2.default)(res, 'Bad Email or Password', 401);
};

var authRoute = function authRoute(userState, dispatch, secret, algorithm) {
  return function (req, res) {
    // Validate email and password
    var email = req.body.email;
    var password = req.body.password;
    if (!(0, _isEmail2.default)(email)) return bad(res);
    if (typeof password !== 'string') return bad(res);

    // Lookup user
    var userId = userState.lookupUsers[email];
    if (!userId) return bad(res);
    var user = userState.users[userId];
    // Check password
    if (!(0, _hashers.isSame)(password, user.password)) return bad(res);

    // Make token
    var token = _jsonwebtoken2.default.sign(user, secret, {
      algorithm: algorithm,
      expiresIn: 86400 // expires in 24 hours
    });

    dispatch({
      type: 'USER_LOGGED_IN',
      payload: userId
    });

    return res.json({ data: [token, user] });
  };
};

exports.default = authRoute;