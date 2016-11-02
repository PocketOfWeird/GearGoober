import socketIo from 'socket.io'
import socketioJwt from 'socketio-jwt'
import config from '../../.config/gearGooberConfig.js'


export const startSocketIo = (server, store) => {
  const io = socketIo.listen(server)
  io.sockets
    .on('connection', socketioJwt.authorize({
      secret: config.secret,
      algorithm: config.algorithm,
       // 15 seconds to send the authentication message
      timeout: 15000,
      // Delay server-side socket disconnect to wait for client-side callback
      callback: 15000
    }))

  console.log('Socket server listening') // eslint-disable-line no-console
  return io
}
