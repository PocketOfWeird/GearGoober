'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockSnapshop = undefined;

var _hashers = require('./hashers');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tennantId = (0, _hashers.randomId)();
var userId = (0, _hashers.randomId)();
var userPassword = (0, _hashers.hash)('boogerface');

var mockSnapshop = exports.mockSnapshop = {
  tennants: _defineProperty({}, tennantId, { name: 'Demo University' }),
  users: _defineProperty({}, userId, {
    tennant: tennantId, email: 'bob@demo.edu', password: userPassword,
    permissions: { admin: true, manager: true, labworker: true }
  }),
  lookup: { users: { 'bob@demo.edu': userId } }
};