import { List } from 'immutable'
import { ACTIVATE_VIEW, HASH_CHANGE, RECEIVE_TOKEN } from '../actions'
import { defaultView } from '../helpers'

const defaultState = List()

const activeView = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIVATE_VIEW:
      return action.view
    case HASH_CHANGE:
      if (state.equals(action.view)) {
        return state
      }
      return action.view
    case RECEIVE_TOKEN:
      return defaultView
    default:
      return state
  }
}

export default activeView
