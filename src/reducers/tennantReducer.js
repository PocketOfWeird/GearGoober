import { SET_TENNANT } from '../actions'


const tennant = (state = '', action) => {
  switch (action.type) {
    case SET_TENNANT:
      return action.payload
    default:
      return state
  }
}

export default tennant
