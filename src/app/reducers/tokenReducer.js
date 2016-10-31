import { AUTH_SUCCESS, AUTH_CLEAR } from '../actions'


const token = (state = '', action) => {
    switch (action.type) {
      case AUTH_SUCCESS:
        return action.payload.token
      case AUTH_CLEAR:
        return ''
      default:
        return state
    }
}

export default token
