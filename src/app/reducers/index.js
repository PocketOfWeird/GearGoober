import { combineReducers } from 'redux'
import token from './tokenReducer'
import user from './userReducer'
import data from './dataReducer'
import error from './errorReducer'
import form from './formReducer'
import view from './viewReducer'


const rootReducer = combineReducers({
  token,
  user,
  data,
  error,
  form,
  view
})

export default rootReducer
