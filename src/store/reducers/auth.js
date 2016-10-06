import { Map } from 'immutable'
import { INVALIDATE_TOKEN, REQUEST_TOKEN, RECEIVE_TOKEN } from '../actions'


let defaultState = Map({
  token: '',
  fetching: false,
  didInvalidate: false
})

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case INVALIDATE_TOKEN:
      return state.set('token', '')
                  .set('didInvalidate', true)
    case REQUEST_TOKEN:
      return state.set('fetching', true)
                  .set('didInvalidate', false)
    case RECEIVE_TOKEN:
      return state.set('token', action.payload)
                  .set('fetching', false)
                  .set('didInvalidate', false)
    default:
      return state
  }
}

export default auth
