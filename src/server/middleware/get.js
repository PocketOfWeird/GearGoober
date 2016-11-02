import { io } from '../index'
import { stateSelector } from '../selectors'


const socketGetMiddleware = store => next => action => {
  if (action.type && action.type === 'CLIENT_GET') {
    io.emit('SERVER_STATE', stateSelector(store.getState(), action.meta))
  }

  return next(action)
}
export default socketGetMiddleware
