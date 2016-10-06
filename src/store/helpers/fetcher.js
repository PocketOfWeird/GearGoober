import fetch from 'isomorphic-fetch'
import { setViewError } from '../actions'


const api = '/api/'

const jsonOrError = (response) => {
  if (response.status >= 400) {
    return response.json().then(err => {throw err})
  }
  return response.json()
}

const handleFetchError = (dispatch, err) => {
  return dispatch(setViewError(err.message))
}

export const fetchGet = (state, dispatch, url) => {
  let token = state.getIn(['auth', 'token'])
  let tennantId = state.getIn(['user', 'tennantId'])
  let fullUrl = api + url +  '/' + tennantId
  return fetch(fullUrl, {
    method: 'GET',
    headers: {
      'x-access-token': token
    }
  })
  .then(response => jsonOrError(response))
  .catch(err => handleFetchError(dispatch, err))
}

export const fetchPostAnonymous = (dispatch, url, body) => {
  let fullUrl = api + url
  return fetch(fullUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
  .then(response => jsonOrError(response))
  .catch(err => handleFetchError(dispatch, err))
}
