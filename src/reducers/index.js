import { combineReducers } from 'redux'
import user from './userReducer'
import data from './dataReducer'
import error from './errorReducer'
import form from './formReducer'
import view from './viewReducer'


const rootReducer = combineReducers({
  user,
  data,
  form,
  view
})

export default rootReducer
