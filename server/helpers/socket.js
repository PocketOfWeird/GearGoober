'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _socketioJwt = require('socketio-jwt');

var _socketioJwt2 = _interopRequireDefault(_socketioJwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setupSocketIo = function setupSocketIo(server, app) {

  var sio = _socket2.default.listen(server);

  sio.set('authorization', _socketioJwt2.default.authorize({
    secret: app.get('secret'),
    algorithm: app.get('algorithm'),
    handshake: true
  }));

  sio.sockets.on('connection', function (socket) {
    console.log(socket.handshake.decoded_token.email, 'connected'); // eslint-disable-line no-console
    //socket.on('event')
  });

  console.log('Socket server listening'); // eslint-disable-line no-console
};

exports.default = setupSocketIo;