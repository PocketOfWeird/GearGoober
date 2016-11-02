'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startSocketIo = undefined;

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _socketioJwt = require('socketio-jwt');

var _socketioJwt2 = _interopRequireDefault(_socketioJwt);

var _gearGooberConfig = require('../../.config/gearGooberConfig.js');

var _gearGooberConfig2 = _interopRequireDefault(_gearGooberConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startSocketIo = exports.startSocketIo = function startSocketIo(server, store) {
  var io = _socket2.default.listen(server);
  io.sockets.on('connection', _socketioJwt2.default.authorize({
    secret: _gearGooberConfig2.default.secret,
    algorithm: _gearGooberConfig2.default.algorithm,
    // 15 seconds to send the authentication message
    timeout: 15000,
    // Delay server-side socket disconnect to wait for client-side callback
    callback: 15000
  }));

  console.log('Socket server listening'); // eslint-disable-line no-console
  return io;
};