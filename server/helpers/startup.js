'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startServer = undefined;

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _socket = require('./socket');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startServer = exports.startServer = function startServer(store) {
  var app = (0, _app2.default)(store);

  var server = _http2.default.createServer(app);

  (0, _socket2.default)(store, server, app);

  server.listen(app.get('port'), function () {
    return console.log('Http server listening on port ' + app.get('port'));
  }); // eslint-disable-line no-console
};