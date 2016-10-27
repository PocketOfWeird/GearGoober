import { validate } from '../helpers'
import { fetchGet } from '../middleware/api'


export const RECEIVE_SUGGESTIONS = 'RECEIVE_SUGGESTIONS'

const recieveSuggestions = (suggestions) => ({
  type: RECEIVE_SUGGESTIONS,
  payload: suggestions
})

export const getSuggestions = (query, type) => (dispatch) => {
  if (validate(query, 'search') === '') {
    dispatch(fetchGet('suggest/' + type + '/' + query, recieveSuggestions))
  }
}
