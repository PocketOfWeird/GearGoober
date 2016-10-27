import { Map, List } from 'immutable'
import { RAISE_ERROR, CLEAR_ERROR } from '../actions'


const defaultState = Map({
  message: '',
  log: List()
})

const error = (state = defaultState, action) => {
  switch (action.type) {
    case RAISE_ERROR:
      return state.set('message', action.payload.message)
                  .set('log', state.get('log').push(action.payload))
    case CLEAR_ERROR:
      return state.set('message', action.payload.message)
    default:
      return state
  }
}

export default error
