import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'


const logger = createLogger({
    collapsed: true,
    stateTransformer: state => state.toJS()
})

const configureMiddleware = () => {
  return applyMiddleware(
    thunk,
    logger
  )
}

export default configureMiddleware
