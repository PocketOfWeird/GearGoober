import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import localStore from './local'
import on from './on'
import once from './once'
import update from './update'
import url from './url'
import view from './view'


const logger = createLogger({collapsed: true})

const configureMiddleware = () => {
  return applyMiddleware(
    thunk,
    localStore,
    on,
    once,
    update,
    url,
    view,
    logger
  )
}

export default configureMiddleware
export { hydrateState } from './local'
