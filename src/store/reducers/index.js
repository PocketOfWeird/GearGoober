import { combineReducers } from 'redux-immutable'
import views from './views'
import auth from './auth'
import user from './user'
import form from './form'
import equipment from './equipment'

const rootReducer = combineReducers({
  views,
  auth,
  user,
  form,
  equipment
})

export default rootReducer
