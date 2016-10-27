import { combineReducers } from 'redux'
import authReducer from './authReducer'
import searchReducer from './searchReducer'
import error from './errorReducer'
import form from './formReducer'


const rootReducer = combineReducers({
  token: authReducer('token'),
  user: authReducer('user'),
  equipmentSearch: searchReducer,
  error,
  form
})

export default rootReducer
