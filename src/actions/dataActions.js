export const FIREBASE_STATE = 'FIREBASE_STATE'
export const FIREBASE_ONCE = 'FIREBASE_ONCE'
export const FIREBASE_UPDATE = 'FIREBASE_UPDATE'

export const firebaseState = state => ({
  type: FIREBASE_STATE,
  payload: state
})

export const firebaseOnce = (path, data) => ({
  type: FIREBASE_ONCE,
  path,
  data
})

export const firebaseUpdate = (path, values, data=null) => ({
  type: FIREBASE_UPDATE,
  path,
  values,
  data
})
