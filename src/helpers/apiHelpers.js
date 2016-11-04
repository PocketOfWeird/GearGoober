export const jsonOrError = (response) => {
  if (response.status >= 400) {
    return response.json().then(err => {throw err})
  }
  return response.json()
}

export const authorizedGet = (state) => ({
  method: 'GET',
  headers: {
    'x-access-token': state.token
  }
})

export const anonymousPost = (body) => ({
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})

export const authorizedPost = (state, body) => ({
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-access-token': state.token
  },
  body: JSON.stringify(body)
})
