import { FORM_VALUE_CHANGE, FORM_VALUE_VALIDATE,
  FORM_ERROR, FORM_RESET, AUTH_SUCCESS } from '../actions'

const setIn = (state, substate, action) => ({
  ...state,
  [substate]: {
    ...state[substate], [action.payload.name]: action.payload.value
  }
})

const defaultState = { values: {}, errors: {} }

const form = (state = defaultState, action) => {
  switch (action.type) {
    case FORM_VALUE_CHANGE:
      return setIn(state, 'values', action)
    case FORM_VALUE_VALIDATE:
      return setIn(state, 'errors', action)
    case FORM_ERROR:
      return { ...state, errors: action.payload }
    case FORM_RESET:
      return defaultState
    default:
      return state
  }
}

export default form
