import { RAISE_NOTE, CLEAR_NOTE } from '../actions'


const note = (state = '', action) => {
  switch (action.type) {
    case RAISE_NOTE:
      return action.payload
    case CLEAR_NOTE:
      return ''
    default:
      return state
  }
}

export default note
