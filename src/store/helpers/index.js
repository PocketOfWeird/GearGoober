import { List } from 'immutable'
import { validate as emailValidator } from 'email-validator'
import { activateView, activateHashRoute } from '../actions'
export { listenToWindowEvent } from './globalEventListener'


export const defaultView = List(['equipment','search'])


export const dispatchActivateView = (dispatch) => {
  return (view) => {
    dispatch(activateView(List(view)))
  }
}

export const onFirstPageLoad = (store) => {
  let loggedIn = store.getState().getIn(['auth', 'token'])
  if (loggedIn && window.location.hash) {
    // view loading from url link
    let event = {newURL: window.location.href}
    store.dispatch(activateHashRoute(event))
  } else if (loggedIn && store.getState().get('activeView').size === 0) {
    // no cookie, no url link, loading default view
    store.dispatch(activateView(defaultView))
  } else if (loggedIn) {
    // view loading from cookie
    let preLoadedView = store.getState().get('activeView')
    store.dispatch(activateView(preLoadedView))
  } else {
    // not logged in
    store.dispatch(activateView(List(['login'])))
  }
}

export const isValidValue = (value, type) => {
  switch (type) {
    case 'email':
      return emailValidator(value)
    default:
      return false
  }
}
