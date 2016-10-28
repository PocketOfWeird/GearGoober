'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomId = exports.isSame = exports.hash = undefined;

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT = 8;

var hash = exports.hash = function hash(password) {
  return _bcrypt2.default.hashSync(password, SALT);
};

var isSame = exports.isSame = function isSame(password, hash) {
  return _bcrypt2.default.compareSync(password, hash);
};

var randomId = exports.randomId = function randomId() {
  return Math.random().toString(36).substr(2, 12);
};