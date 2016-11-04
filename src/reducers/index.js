import { combineReducers } from 'redux'
import token from './tokenReducer'
import user from './userReducer'
import data from './dataReducer'
import error from './errorReducer'
import form from './formReducer'
import view from './viewReducer'
import { HORIZON_STATE } from '../actions'


const rootReducer = combineReducers({
  data,
  form,
  view
})

export default rootReducer
