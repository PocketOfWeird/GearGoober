import { SERVER_STATE } from '../actions'

const data = (state = {}, action) => {
  switch (action.type) {
    case SERVER_STATE:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default data
