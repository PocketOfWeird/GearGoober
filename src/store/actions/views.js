import { getViewFromHash } from '../middlewares'
export const ACTIVATE_VIEW = 'ACTIVATE_VIEW'
export const HASH_CHANGE = 'HASH_CHANGE'
export const STASH_VIEW = 'STASH_VIEW'


export const activateView = (view) => ({
  type: ACTIVATE_VIEW,
  payload: view
})

export const activateHashRoute = (event) => {
  let view = getViewFromHash(event)
  return {
    type: HASH_CHANGE,
    payload: view
  }
}

export const stashView = (view) => ({
  type: STASH_VIEW,
  payload: view
})
