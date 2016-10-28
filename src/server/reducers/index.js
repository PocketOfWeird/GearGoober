import { HYDRATE_FROM_SNAPSHOT } from '../actions'
import { addLoggedInUser } from './userReducerHelpers'


const reducer = (state = {}, action) => {
  switch (action.type) {
    case HYDRATE_FROM_SNAPSHOT:
      return action.payload
    case 'USER_LOGGED_IN':
      return addLoggedInUser(state, action)
    default:
      return state
  }
}

export default reducer
