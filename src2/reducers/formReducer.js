import { Map } from 'immutable'
import { FORM_VALUE_CHANGE, FORM_VALUE_VALIDATE,
  FORM_ERROR, FORM_RESET } from '../actions'


const defaultState = Map()

const form = (state = defaultState, action) => {
  switch (action.type) {
    case FORM_VALUE_CHANGE:
      return state.setIn(['values', action.payload.name], action.payload.value)
    case FORM_VALUE_VALIDATE:
      return state.setIn(['errors', action.payload.name], action.payload.error)
    case FORM_ERROR:
      return state.set('errors', action.payload)
    case FORM_RESET:
      return defaultState
    default:
      return state
  }
}

export default form
