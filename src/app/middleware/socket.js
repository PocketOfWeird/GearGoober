import io from 'socket.io-client'
import { AUTH_SUCCESS, SERVER_STATE, CLIENT_GET,
  serverState, unauthenticate } from '../actions'


export const socketMiddleware = store => next => action => {

  if (action.type && action.type === AUTH_SUCCESS) {

    const socket = io.connect()
    socket.on('connect', () => {
      socket
        .emit('authenticate', {
          token: action.payload.token || store.getState().token
        }) // send the jwt
        .on('unauthorized', (err, serverCallback) => {
          if (err.data.type == "UnauthorizedError" || err.data.code == "invalid_token") {
            serverCallback()
            store.dispatch(unauthenticate())
          }
        })
        .on('authenticated', () => console.log('connected to socket server'))
        .on(SERVER_STATE, state => {
          store.dispatch(serverState(state))
        })
    })
  }

  return next(action)
}

export default socketMiddleware
