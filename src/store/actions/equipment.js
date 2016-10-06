import { fromJS } from 'immutable'
import { fetchGet } from '../helpers'


export const SET_QUERY = 'SET_QUERY'
export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const CLEAR_ITEMS = 'CLEAR_ITEMS'

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query
})

export const clearItems = (itemType) => ({
  type: CLEAR_ITEMS,
  itemType: itemType
})

const requestItems = (itemType, query) => ({
  type: REQUEST_ITEMS,
  itemType: itemType,
  payload: query
})

const recieveItems = (itemType, items) => ({
  type: RECEIVE_ITEMS,
  itemType: itemType,
  payload: items
})

let urls = {
  'suggestions': 'suggest/equipment/',
  'results': 'search/equipment/',
  'details': 'details/equipment/'
}

export const fetchItems = (itemType, query) => {
    return (dispatch, getState) => {
      dispatch(requestItems(itemType, query))
      return fetchGet(getState(), dispatch, urls[itemType] + query)
        .then(json => {
          dispatch(recieveItems(itemType, fromJS(json.data)))
        })
    }
}
