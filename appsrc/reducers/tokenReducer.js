import { AUTH_SUCCESS } from '../actions'


const token = (state = '', action) => {
    switch (action.type) {
      case AUTH_SUCCESS:
        return action.payload.token
      default:
        return state
    }
}

export default token
