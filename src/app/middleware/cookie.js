import Cookies from 'cookies-js'

Cookies.defaults = {
  path: '/',
  domain: 'localhost', // TODO: switch to host domain
  expires: 86400, // expires in 24 hours
  //TODO: secure: true // requires https
}

export const cookieMiddleware = store => next => action => {
  let result = next(action)
  let currentState = JSON.stringify(store.getState())
  Cookies.set('state', currentState)
  return result
}

export const loadStateFromCookies = () => {
  if (Cookies.get('state')) {
    return JSON.parse(Cookies.get('state'))
  }
  return null
}
