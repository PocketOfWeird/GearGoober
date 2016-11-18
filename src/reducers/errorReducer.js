import { RAISE_ERROR, CLEAR_ERROR } from '../actions'


const defaultState = {
  message: '',
  log: []
}

const error = (state = defaultState, action) => {
  switch (action.type) {
    case RAISE_ERROR:
      return {
        ...state,
        message: action.payload.message,
        log: [...state.log, action.payload]
      }
    case CLEAR_ERROR:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

export default error
