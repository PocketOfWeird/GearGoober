'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _middleware = require('../middleware');

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureStore = function configureStore() {
  return (0, _redux.createStore)(_reducers2.default,
  //loadStateFromDB(),
  (0, _middleware2.default)());
};

exports.default = configureStore;