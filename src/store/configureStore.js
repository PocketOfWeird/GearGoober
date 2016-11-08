import { createStore } from 'redux'
import rootReducer from '../reducers'
import configureMiddleware, { hydrateState } from '../middleware'


const configureStore = () => {
  return createStore(
    rootReducer,
    hydrateState() || {},
    configureMiddleware()
  )
}

export default configureStore
