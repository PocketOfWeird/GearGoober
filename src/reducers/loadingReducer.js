import { LOGGING_IN, USER_UPDATED } from '../actions'


const loading = (state = false, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return true
    case USER_UPDATED:
      return false
    default:
      return state
  }
}

export default loading
