import { applyMiddleware } from 'redux'
import socketGetMiddleware from './get'


const configureMiddleware = () => {
  return applyMiddleware(
    socketGetMiddleware
  )
}

export default configureMiddleware
