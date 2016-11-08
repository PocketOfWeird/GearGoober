import { USER_UPDATED, USER_OUT } from '../actions'


const user = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATED:
      return action.payload
    case USER_OUT:
      return {}
    default:
      return state
  }
}


export default user
