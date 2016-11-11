import { combineReducers } from 'redux'
import user from './userReducer'
import data from './dataReducer'
import error from './errorReducer'
import form from './formReducer'
import tennant from './tennantReducer'
import view from './viewReducer'
import loading from './loadingReducer'


const rootReducer = combineReducers({
  user,
  tennant,
  data,
  form,
  view,
  loading
})

export default rootReducer
