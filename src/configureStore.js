import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const configureStore = (preLoadedState) => {
  return createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}

export default configureStore
