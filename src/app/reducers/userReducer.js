import { AUTH_SUCCESS, AUTH_CLEAR } from '../actions'


const user = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return action.payload.user
    case AUTH_CLEAR:
      return {}
    default:
      return state
  }
}


export default user
