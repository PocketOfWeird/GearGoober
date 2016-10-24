import fetch from 'isomorphic-fetch'
import { jsonOrError, authorizedGet, anonymousPost } from '../helpers'
import { raiseError } from '../actions'


const api = endpoint => '/api/' + endpoint

const fetcher = (endpoint, callback, calltype, dispatch) => {
  return fetch(api(endpoint), calltype)
  .then(response => jsonOrError(response))
  .then(json => dispatch(callback(json.data)))
  .catch(error => raiseError(error))
}

export const fetchGet = (endpoint, callback) => (dispatch, getState) => {
  return fetcher(endpoint, callback, authorizedGet(getState()), dispatch)
}

export const fetchPostAnonymous = (endpoint, callback, body) => (dispatch) => {
  return fetcher(endpoint, callback, anonymousPost(body), dispatch)
}
