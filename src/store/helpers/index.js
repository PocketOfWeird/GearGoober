import { List } from 'immutable'
import { activateView, activateHashRoute } from '../actions'
export { listenToWindowEvent } from './globalEventListener'

export const dispatchActivateView = (dispatch) => {
  return (view) => {
    dispatch(activateView(List(view)))
  }
}

export const onFirstPageLoad = (store) => {
  if (window.location.hash) {
    // view loading from url link
    let event = {newURL: window.location.href}
    store.dispatch(activateHashRoute(event))
  } else if (store.getState().get('activeView').size === 0) {
    // no cookie, no url link, loading default view
    let firstView = List(['equipment','search'])
    store.dispatch(activateView(firstView))
  } else {
    // view loading from cookie
    let preLoadedView = store.getState().get('activeView')
    store.dispatch(activateView(preLoadedView))
  }
}
