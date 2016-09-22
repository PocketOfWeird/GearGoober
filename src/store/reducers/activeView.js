import { List } from 'immutable'
import { ACTIVATE_VIEW } from '../actions'

const defaultState = List()

const activeView = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIVATE_VIEW:
      return action.view
    default:
      return state
  }
}

export default activeView
