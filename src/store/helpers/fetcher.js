import fetch from 'isomorphic-fetch'


const api = '/api/'

const jsonOrError = (response) => {
  if (response.status >= 400) {
    console.log(response.json().message);
    throw new Error(response.json().message)
  }
  return response.json()
}

export const fetchGet = (state, url) => {
  let token = state.getIn(['auth', 'token'])
  let tennantId = state.getIn(['user', 'tennantId'])
  let fullUrl = api + url +  '/' + tennantId
  return fetch(fullUrl, {
    method: 'GET',
    headers: {
      'x-access-token': token
    }
  }).then(response => jsonOrError(response))
}

export const fetchPostAnonymous = (url, body) => {
  let fullUrl = api + url
  return fetch(fullUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  }).then(response => jsonOrError(response))
}
