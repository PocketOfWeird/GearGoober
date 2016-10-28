'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setupEnvironment = function setupEnvironment(app, config) {
  app.set('environment', config.environment);
  var env = process.env.NODE_ENV = app.get('environment');
  var runningAs = process.argv[2]; // commandline args 'production' or 'demo'
  app.set('port', config.port);
  if (runningAs === 'demo') {
    app.set('port', config.demoPort);
  }
};

exports.default = setupEnvironment;