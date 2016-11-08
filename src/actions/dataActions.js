export const FIREBASE_STATE = 'FIREBASE_STATE'
export const FIREBASE_ONCE = 'FIREBASE_ONCE'

export const firebaseState = state => ({
  type: FIREBASE_STATE,
  payload: state
})

export const firebaseOnce = (path, key) => ({
  type: FIREBASE_ONCE,
  path,
  key
})
