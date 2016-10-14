import { fromJS } from 'immutable'
import { fetchGet } from '../helpers'
import { cloneFromState } from './form'


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

const recieveItems = (itemType, items, shouldClone) => ({
  type: RECEIVE_ITEMS,
  itemType: itemType,
  payload: items,
  shouldClone: shouldClone
})

const shouldFetch = (state, substate) => {
  return state.getIn(['equipment', substate]) ? false : true
}

let urls = {
  'suggestions': 'suggest/equipment/',
  'results': 'search/equipment/',
  'details': 'details/equipment/',
  'categories': 'all/categories/'
}

export const fetchItems = (itemType, query, shouldClone = false) => {
    return (dispatch, getState) => {
      dispatch(requestItems(itemType, query))
      return fetchGet(getState(), dispatch, urls[itemType] + query)
        .then(json => {
          dispatch(recieveItems(itemType, fromJS(json.data), shouldClone))
        })
    }
}

export const getEquipmentToEdit = (equipmentId) => {
  return (dispatch, getState) => {
    let state = getState()
    if (shouldFetch(state, 'details')) {
      return dispatch(fetchItems('details', equipmentId, true))
    } else {
      dispatch(cloneFromState(state.getIn(['equipment','details'])))
    }
  }
}

export const getCategoriesIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetch(getState(), 'categories')) {
      return dispatch(fetchItems('categories'))
    }
  }
}
