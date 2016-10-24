import { Map } from 'immutable'
import { RECEIVE_SUGGESTIONS } from '../actions'


let defaultState = Map({
  suggestions: []
})

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SUGGESTIONS:
      return state.set('suggestions', action.payload)
    default:
      return state
  }
}

export default searchReducer
