import { AUTH_SUCCESS, AUTH_CLEAR } from '../actions'


const auth = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return action.payload
    case AUTH_CLEAR:
      return {}
    default:
      return state
  }
}


export default auth
