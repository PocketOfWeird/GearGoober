import socketIo from 'socket.io'
import socketioJwt from 'socketio-jwt'


const setupSocketIo = (server, app) => {

  let sio = socketIo.listen(server)

  sio.set('authorization', socketioJwt.authorize({
    secret: app.get('secret'),
    algorithm: app.get('algorithm'),
    handshake: true
  }))

  sio.sockets
    .on('connection', socket => {
      console.log(socket.handshake.decoded_token.email, 'connected') // eslint-disable-line no-console
     //socket.on('event')
    })

  console.log('Socket server listening') // eslint-disable-line no-console
}

export default setupSocketIo
