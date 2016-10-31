import socketIo from 'socket.io'
import socketioJwt from 'socketio-jwt'
import { stateSelector } from '../selectors'


const setupSocketIo = (store, server, app) => {

  let io = socketIo.listen(server)

  io.sockets
    .on('connection', socketioJwt.authorize({
      secret: app.get('secret'),
      algorithm: app.get('algorithm'),
       // 15 seconds to send the authentication message
      timeout: 15000,
      // Delay server-side socket disconnect to wait for client-side callback
      callback: 15000
    }))
    .on('authenticated', socket => {
      const user = socket.decoded_token
      console.log(user.email, ' connected')
      socket
        .emit('SERVER_STATE', stateSelector(store.getState(), user))
    })


  console.log('Socket server listening') // eslint-disable-line no-console
}

export default setupSocketIo
