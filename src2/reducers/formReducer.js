import { Map } from 'immutable'
import { FORM_VALUE_CHANGE } from '../actions'


const defaultState = Map()

const form = (state = defaultState, action) => {
  switch (action.type) {
    case FORM_VALUE_CHANGE:
      return state.set(action.valueId, action.payload)
    default:
      return state
  }
}

export default form
