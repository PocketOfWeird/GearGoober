import { combineReducers } from 'redux'
import user from './userReducer'
import data from './dataReducer'
import error from './errorReducer'
import form from './formReducer'
import loading from './loadingReducer'
import note from './noteReducer'
import view from './viewReducer'


const rootReducer = combineReducers({
  user,
  data,
  error,
  form,
  loading,
  note,
  view
})

export default rootReducer
