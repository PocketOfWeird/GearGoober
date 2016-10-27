import fetch from 'isomorphic-fetch'
import { jsonOrError, authorizedGet, anonymousPost } from '../helpers'
import { raiseError } from '../actions'


const api = endpoint => 'api/' + endpoint

const fetcher = (endpoint, callback, fetchType, dispatch) => {
  return fetch('/' + endpoint, fetchType)
  .then(response => jsonOrError(response))
  .then(json => dispatch(callback(json.data)))
  .catch(error => dispatch(raiseError(error)))
}

export const fetchGet = (endpoint, callback) => (dispatch, getState) => {
  return fetcher(api(endpoint), callback, authorizedGet(getState()), dispatch)
}

export const fetchPostAnonymous = (endpoint, callback, body) => (dispatch) => {
  return fetcher(endpoint, callback, anonymousPost(body), dispatch)
}
