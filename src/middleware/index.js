import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import watchHorizon from './watch'
import fetchHorizon from './fetch'
import { cookieMiddleware } from './cookie'
export { loadStateFromCookies } from './cookie'


const logger = createLogger({collapsed: true})

const configureMiddleware = () => {
  return applyMiddleware(
    thunk,
    logger,
    watchHorizon,
    fetchHorizon,
    cookieMiddleware
  )
}

export default configureMiddleware
