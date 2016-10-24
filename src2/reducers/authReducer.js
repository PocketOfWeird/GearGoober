import { AUTH_SUCCESS } from '../actions'


const authReducer = key => {
  return (state = '', action) => {
    switch (action.type) {
      case AUTH_SUCCESS:
        return action.payload[key]
      default:
        return state
    }
  }
}

export default authReducer
