import { Map } from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers/'

const logger = createLogger({
    collapsed: true,
    stateTransformer: state => state.toJS()
})

const configureStore = (preLoadedState) => {
  return createStore(
    rootReducer,
    preLoadedState ? preLoadedState : Map(),
    applyMiddleware(
      thunk,
      logger
    )
  )
}

export default configureStore
