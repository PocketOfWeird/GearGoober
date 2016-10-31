'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _socketioJwt = require('socketio-jwt');

var _socketioJwt2 = _interopRequireDefault(_socketioJwt);

var _selectors = require('../selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setupSocketIo = function setupSocketIo(store, server, app) {

  var io = _socket2.default.listen(server);

  io.sockets.on('connection', _socketioJwt2.default.authorize({
    secret: app.get('secret'),
    algorithm: app.get('algorithm'),
    // 15 seconds to send the authentication message
    timeout: 15000,
    // Delay server-side socket disconnect to wait for client-side callback
    callback: 15000
  })).on('authenticated', function (socket) {
    var user = socket.decoded_token;
    console.log(user.email, ' connected');
    socket.emit('SERVER_STATE', (0, _selectors.stateSelector)(store.getState(), user));
  });

  console.log('Socket server listening'); // eslint-disable-line no-console
};

exports.default = setupSocketIo;