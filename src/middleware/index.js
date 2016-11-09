import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import localStore from './local'
import on from './on'
import url from './url'


const logger = createLogger({collapsed: true})

const configureMiddleware = () => {
  return applyMiddleware(
    thunk,
    localStore,
    on,
    url,
    logger
  )
}

export default configureMiddleware
export { hydrateState } from './local'
