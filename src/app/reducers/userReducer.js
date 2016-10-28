import { Map, fromJS } from 'immutable'
import { AUTH_SUCCESS } from '../actions'


const defaultState = Map()

const user = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return fromJS(action.payload.user)
    default:
      return state
  }
}


export default user
