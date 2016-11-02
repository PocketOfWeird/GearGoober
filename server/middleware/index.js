'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureMiddleware = function configureMiddleware() {
  return (0, _redux.applyMiddleware)(_get2.default);
};

exports.default = configureMiddleware;