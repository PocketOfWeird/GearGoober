'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.io = undefined;

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _helpers = require('./helpers');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _store2.default)();
var server = (0, _helpers.startServer)(store);
var io = exports.io = (0, _helpers.startSocketIo)(server, store);

store.dispatch((0, _actions.hydrateFromSnapshot)(_helpers.mockSnapshop));