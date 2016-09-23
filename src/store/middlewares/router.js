import { List } from 'immutable'
import { listenToWindowEvent, onFirstPageLoad } from '../helpers'
import { activateHashRoute } from '../actions'


const transform = (view) => {
  // recursive case
  if (view.size > 1) {
    return '/' + view.first() + transform(view.rest())
  }
  // special case
  else if (view.size === 0) {
    return '/'
  }
  // base case
  return '/' + view.first() + '/'
}

export const getViewFromHash = (event) => {
  let url = event.newURL.slice(event.newURL.indexOf('#') + 2).split('/')
  let view = List(url)
  return view.last() === "" ? view.pop() : view
}

export const configureRouter = (store) => {
  // subscribe to event
  let unlistenRouter = store.dispatch(
    listenToWindowEvent('hashchange', activateHashRoute)
  )
  // eventually unsubscribe
  //unlistenRouter();

  // run first page load logic
  onFirstPageLoad(store)
}

export const router = store => next => action => {
  let result = next(action)
  const appUrlString = transform(store.getState().get('activeView'))
  window.location.hash = appUrlString
  return result
}
