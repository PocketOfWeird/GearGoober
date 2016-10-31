import { createStore } from 'redux'
import rootReducer from '../reducers'
import configureMiddleware, { loadStateFromCookies } from '../middleware'


const configureStore = () => {
  return createStore(
    rootReducer,
    //loadStateFromCookies() || {},
    configureMiddleware()
  )
}

export default configureStore
