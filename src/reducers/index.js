import { combineReducers } from 'redux'
import auth from './authReducer'
import data from './dataReducer'
import error from './errorReducer'
import form from './formReducer'
import view from './viewReducer'


const rootReducer = combineReducers({
  auth,
  data,
  form,
  view
})

export default rootReducer
