import { Map, fromJS } from 'immutable'
import { setUser } from './user'
import { clearForm } from './form'
import { isValidValue, fetchPostAnonymous } from '../helpers'


export const INVALIDATE_TOKEN = 'INVALIDATE_TOKEN'
export const REQUEST_TOKEN = 'REQUEST_TOKEN'
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN'

const invalidateToken = () => ({
  type: INVALIDATE_TOKEN
})

const requestToken = () => ({
  type: REQUEST_TOKEN
})

const recieveToken = (token) => ({
  type: RECEIVE_TOKEN,
  payload: token
})

const shouldFetchToken = (state) => {
  const auth = state.get('auth')
  if (!auth.get('token')) {
    return true
  } else if (auth.get('fetching')) {
    return false
  } else {
    return auth.get('didInvalidate')
  }
}

const fetchToken = (email, password) => {
  return dispatch => {
    dispatch(requestToken)
    return fetchPostAnonymous(dispatch,
      'auth/',
      { email: email, password: password }
    ).then( json => {
      dispatch(clearForm())
      dispatch(recieveToken(json.data[0]))
      dispatch(setUser(fromJS(json.data[1])))
    })
  }
}


export const login = (email, password) => {
  return (dispatch, getState) => {
    if (shouldFetchToken(getState())) {
      return dispatch(fetchToken(email, password))
    }
  }
}
