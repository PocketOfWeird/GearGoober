'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _gearGooberConfig = require('../../.config/gearGooberConfig.js');

var _gearGooberConfig2 = _interopRequireDefault(_gearGooberConfig);

var _security = require('./security');

var _security2 = _interopRequireDefault(_security);

var _environment = require('./environment');

var _environment2 = _interopRequireDefault(_environment);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setupApp = function setupApp(store) {
  var app = (0, _express2.default)();

  (0, _security2.default)(app, _gearGooberConfig2.default);

  (0, _environment2.default)(app, _gearGooberConfig2.default);

  // Static file setup
  app.use(_express2.default.static('public'));

  (0, _router2.default)(app, store);

  return app;
};

exports.default = setupApp;