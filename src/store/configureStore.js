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
    preLoadedState,
    applyMiddleware(
      thunk,
      logger
    )
  )
}

export default configureStore
