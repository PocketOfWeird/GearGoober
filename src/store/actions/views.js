import { getViewFromHash } from '../middlewares'


export const ACTIVATE_VIEW = 'ACTIVATE_VIEW'
export const HASH_CHANGE = 'HASH_CHANGE'
export const STASH_VIEW = 'STASH_VIEW'
export const SET_VIEW_ERROR = 'SET_VIEW_ERROR'
export const CLEAR_VIEW_ERROR = 'CLEAR_VIEW_ERROR'

export const activateView = (view) => ({
  type: ACTIVATE_VIEW,
  payload: view
})

export const activateHashRoute = (event) => {
  let view = getViewFromHash(event)
  return {
    type: HASH_CHANGE,
    payload: view
  }
}

export const stashView = (view) => ({
  type: STASH_VIEW,
  payload: view
})

export const setViewError = (err) => ({
  type: SET_VIEW_ERROR,
  payload: err
})

const clearViewError = () => ({
  type: CLEAR_VIEW_ERROR
})

const shouldClearViewError = (state) => {
  return state.getIn(['views', 'viewError']) ? true : false
}

export const clearViewErrorIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldClearViewError(getState())) {
      return dispatch(clearViewError())
    }
  }
}
