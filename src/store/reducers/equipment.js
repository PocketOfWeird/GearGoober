import { Map } from 'immutable'
import { SET_QUERY, REQUEST_ITEMS, RECEIVE_ITEMS,
  CLEAR_ITEMS } from '../actions'


let defaultState = Map()

const equipment = (state = defaultState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return state.set('currentQuery', action.payload)
    case REQUEST_ITEMS:
      return state.set('currentQuery', action.payload)
                  .set('fetching_' + action.itemType, true)
    case RECEIVE_ITEMS:
      return state.set(action.itemType, action.payload)
                  .set('fetching_' + action.itemType, false)
    case CLEAR_ITEMS:
      return state.delete(action.itemType)
    default:
      return state
  }
}

export default equipment
