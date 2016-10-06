import { Map } from 'immutable'
import { createStore } from 'redux'
import rootReducer from './reducers'
import configureMiddleware, { loadStateFromCookies } from './middlewares'

let preLoadedState = loadStateFromCookies()

const configureStore = () => {
  return createStore(
    rootReducer,
    preLoadedState ? preLoadedState : Map(),
    configureMiddleware()
  )
}

export default configureStore
