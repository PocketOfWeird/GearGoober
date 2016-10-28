'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _expressContentLengthValidator = require('express-content-length-validator');

var _expressContentLengthValidator2 = _interopRequireDefault(_expressContentLengthValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var helmetSetup = function helmetSetup(host) {
  return (0, _helmet2.default)({
    frameguard: {
      action: 'deny'
    },
    hidePoweredBy: {
      setTo: 'RUBY 2.3.1'
    }
  });
};

/*
 * TODO: add the following to configs to helmet
 *  contentSecurityPolicy
 *  hsts
 *  referrerPolicy
 *  hpkp
*/

var setupSecurity = function setupSecurity(app, config) {
  app.set('host', config.host);
  app.use(helmetSetup(app.get('host')));
  app.use(require('body-parser').json());
  app.use(_expressContentLengthValidator2.default.validateMax());
  app.set('secret', config.secret);
  app.set('algorithm', config.algorithm);
  // Security: TODO: Add express-enforces-ssl
};

exports.default = setupSecurity;