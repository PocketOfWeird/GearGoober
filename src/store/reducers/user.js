import { Map } from 'immutable'
import { SET_USER } from '../actions'

let defaultState = Map()

const user = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload
    default:
      return state
  }
}

export default user
