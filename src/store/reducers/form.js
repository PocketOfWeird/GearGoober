import { Map } from 'immutable'
import { SET_FORM_VALUE, CLEAR_FORM, CLONE_FROM_STATE,
RECEIVE_ITEMS } from '../actions'


let defaultState = Map()

const form = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FORM_VALUE:
      return state.set(action.valueId, action.payload)
    case CLEAR_FORM:
      return defaultState
    case CLONE_FROM_STATE:
      return action.payload
    case RECEIVE_ITEMS:
      if (action.shouldClone) {
        return action.payload
      }
    default:
      return state
  }
}

export default form
