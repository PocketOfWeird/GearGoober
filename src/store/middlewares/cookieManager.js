import Cookies from 'cookies-js'
import { fromJS } from 'immutable'

Cookies.defaults = {
  path: '/app/',
  domain: 'localhost', // TODO: switch to host domain
  expires: 86400, // expires in 24 hours
  //TODO: secure: true // requires https
}

export const cookieMiddleware = store => next => action => {
  let result = next(action)
  let currentState = JSON.stringify(store.getState().toJS())
  Cookies.set('state', currentState)
  return result
}

export const loadStateFromCookies = () => {
  if (Cookies.get('state')) {
    return fromJS(JSON.parse(Cookies.get('state')))
  }
  return null
}
