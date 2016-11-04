import { createStore } from 'redux'
import { autoRehydrate } from 'redux-persist'
import rootReducer from '../reducers'
import configureMiddleware, { loadStateFromCookies } from '../middleware'


const configureStore = () => {
  return createStore(
    rootReducer,
    undefined,
    autoRehydrate(),
    configureMiddleware()
  )
}

export default configureStore
