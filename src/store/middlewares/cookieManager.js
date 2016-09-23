import Cookies from 'cookies-js'
import { Map, List } from 'immutable'

Cookies.defaults = {
  path: '/app/',
  domain: 'localhost', // TODO: switch to host domain
  expires: 86400, // expires in 24 hours
  //TODO: secure: true // requires https
}

export const cookieMiddleware = store => next => action => {
  let result = next(action)
  let activeView = JSON.stringify(store.getState().get('activeView').toJS())
  Cookies.set('activeView', activeView)
  return result
}

export const loadStateFromCookies = () => {
  if (Cookies.get('activeView')) {
    let state = Map()
    let activeView = List(JSON.parse(Cookies.get('activeView')))
    return state.set('activeView', activeView)
  }
  return null
}
