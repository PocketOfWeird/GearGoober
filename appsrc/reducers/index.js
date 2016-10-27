import { combineReducers } from 'redux'
import token from './tokenReducer'
import user from './userReducer'
import searchReducer from './searchReducer'
import error from './errorReducer'
import form from './formReducer'
import view from './viewReducer'


const rootReducer = combineReducers({
  token,
  user,
  equipmentSearch: searchReducer,
  error,
  form,
  view
})

export default rootReducer
