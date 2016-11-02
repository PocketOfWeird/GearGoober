import { createStore } from 'redux'
import rootReducer from '../reducers'
import configureMiddleware from '../middleware'


const configureStore = () => {
  return createStore(
    rootReducer,
    //loadStateFromDB(),
    configureMiddleware()
  )
}

export default configureStore
