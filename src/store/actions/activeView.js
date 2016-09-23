import { getViewFromHash } from '../middlewares'
export const ACTIVATE_VIEW = 'ACTIVATE_VIEW'
export const HASH_CHANGE = 'HASH_CHANGE'

export const activateView = (view) => ({
  type: ACTIVATE_VIEW,
  view
})

export const activateHashRoute = (event) => {
  let view = getViewFromHash(event)
  return {
    type: HASH_CHANGE,
    view
  }
}
