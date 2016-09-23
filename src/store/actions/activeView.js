import { List } from 'immutable'

export const ACTIVATE_VIEW = 'ACTIVATE_VIEW'
export const HASH_CHANGE = 'HASH_CHANGE'

export const activateView = (view) => ({
  type: ACTIVATE_VIEW,
  view
})

export const activateHashRoute = (e) => {
  let view = List(
    e.newURL.slice(e.newURL.indexOf('#') + 2).split('/')
  ).pop()
  return {
    type: HASH_CHANGE,
    view
  }
}
