import { FIREBASE_STATE } from '../actions'

const data = (state = { suggestions: [] }, action) => {
  switch (action.type) {
    case FIREBASE_STATE:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default data
