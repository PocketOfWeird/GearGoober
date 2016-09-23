import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { router } from './router'
import { cookieMiddleware } from './cookieManager'
export { configureRouter, getViewFromHash } from './router'
export { loadStateFromCookies } from './cookieManager'


const logger = createLogger({
    collapsed: true,
    stateTransformer: state => state.toJS()
})

const configureMiddleware = () => {
  return applyMiddleware(
    thunk,
    logger,
    router,
    cookieMiddleware
  )
}

export default configureMiddleware
