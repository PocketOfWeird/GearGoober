import { Map } from 'immutable'
import { createStore } from 'redux'
import rootReducer from './reducers'
import configureMiddleware from './middlewares'

const configureStore = (preLoadedState) => {
  return createStore(
    rootReducer,
    preLoadedState ? preLoadedState : Map(),
    configureMiddleware()
  )
}

export default configureStore
