import {
  LOGGING_IN, USER_UPDATED, REGISTER_USER, FIREBASE_UPDATE
} from '../actions'


const loading = (state = false, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return true
    case REGISTER_USER:
      return true
    case FIREBASE_UPDATE:
      return true
    case USER_UPDATED:
      return false
    default:
      return state
  }
}

export default loading
