import { Map } from 'immutable'
import { SET_FORM_VALUE, CLEAR_FORM } from '../actions'


let defaultState = Map()

const form = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FORM_VALUE:
      return state.set(action.valueId, action.payload)
    case CLEAR_FORM:
      return defaultState
    default:
      return state
  }
}

export default form
