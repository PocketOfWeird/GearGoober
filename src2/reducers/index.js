import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import form from './formReducer'


const rootReducer = combineReducers({
  routing: routerReducer,
  form
})

export default rootReducer
