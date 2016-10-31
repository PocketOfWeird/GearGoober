import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import socketMiddleware from './socket'
import { cookieMiddleware } from './cookie'
export { loadStateFromCookies } from './cookie'


const logger = createLogger({collapsed: true})

const configureMiddleware = () => {
  return applyMiddleware(
    thunk,
    logger,
    socketMiddleware,
    cookieMiddleware
  )
}

export default configureMiddleware
