import { FORM_VALUE_CHANGE, FORM_VALUE_VALIDATE,
  FORM_ERROR, FORM_RESET, FORM_TAG_CHANGE, FORM_TAG_REMOVE,
  AUTH_SUCCESS } from '../actions'

const setIn = (state, substate, action) => ({
  ...state,
  [substate]: {
    ...state[substate], [action.payload.name]: action.payload.value
  }
})

const setInDeep = (state, substate, action) => ({
  ...state,
  [substate]: {
    ...state[substate],
    [action.payload.name]: {
      ...state[substate][action.payload.name],
      [action.payload.key]: action.payload.value
    }
  }
})

const removeDeep = (state, substate, action) => {
  const newState = {...state}
  const deleted = delete newState[substate][action.payload.name][action.payload.key]
  return deleted ? newState : state
}

const defaultState = { values: {}, errors: {} }

const form = (state = defaultState, action) => {
  switch (action.type) {
    case FORM_VALUE_CHANGE:
      return setIn(state, 'values', action)
    case FORM_TAG_CHANGE:
      return setInDeep(state, 'values', action)
    case FORM_TAG_REMOVE:
      return removeDeep(state, 'values', action)
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
