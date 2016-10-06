import { Map } from 'immutable'
import { ACTIVATE_VIEW, HASH_CHANGE, STASH_VIEW,
  SET_VIEW_ERROR, CLEAR_VIEW_ERROR, RECEIVE_TOKEN,
  REQUEST_ITEMS } from '../actions'
import { defaultView } from '../helpers'


const defaultState = Map()

const views = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIVATE_VIEW:
      return state.set('activeView', action.payload)
    case HASH_CHANGE:
      if (state.has('activeView') && state.get('activeView').equals(action.payload)) {
        return state
      }
      return state.set('activeView', action.payload)
    case STASH_VIEW:
      return state.set('stashedView', action.payload)
    case SET_VIEW_ERROR:
      return state.set('viewError', action.payload)
    case CLEAR_VIEW_ERROR:
      return state.delete('viewError')
    case RECEIVE_TOKEN:
      let stashed = state.get('stashedView')
      if (stashed && stashed.size > 0) {
        return state.set('activeView', stashed)
                    .delete('stashedView')
      }
      return state.set('activeView', defaultView)
    case REQUEST_ITEMS:
      if (action.itemType === 'results') {
        if (state.has('activeView')) {
          return state.set('activeView', state.get('activeView').push(action.payload))
        }
      }
    default:
      return state
  }
}

export default views
