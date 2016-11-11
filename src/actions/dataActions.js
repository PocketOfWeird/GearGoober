export const FIREBASE_STATE = 'FIREBASE_STATE'
export const FIREBASE_ONCE = 'FIREBASE_ONCE'

export const firebaseState = state => ({
  type: FIREBASE_STATE,
  payload: state
})

export const firebaseOnce = (path, key, tennant, query={}) => ({
  type: FIREBASE_ONCE,
  path,
  key,
  tennant,
  query
})
