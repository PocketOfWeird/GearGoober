import { SET_CURRENT_VIEW, GO_BACKWARD, GO_FORWARD } from '../actions'


const defaultState = {
  past: [],
  current: ['equipment', 'search'],
  future: []
}

const view = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_VIEW:
      return Object.assign({}, state, action.payload)
    case GO_BACKWARD:
      return state.set('future', state.get('future').push(state.get('current')))
                  .set('current', state.get('past').peek())
                  .set('past', state.get('past').pop())
    case GO_FORWARD:
      return state.set('past', state.get('past').push(state.get('current')))
                  .set('current', state.get('future').peek())
                  .set('future', state.get('future').pop())
    default:
      return state
  }
}

export default view
