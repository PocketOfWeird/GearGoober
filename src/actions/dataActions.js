export const FIREBASE_STATE = 'FIREBASE_STATE'
export const FIREBASE_ONCE = 'FIREBASE_ONCE'
export const FIREBASE_UPDATE = 'FIREBASE_UPDATE'
export const UPDATE_COMPLETE = 'UPDATE_COMPLETE'

export const firebaseState = state => ({
  type: FIREBASE_STATE,
  payload: state
})

export const firebaseOnce = (path, data) => ({
  type: FIREBASE_ONCE,
  path,
  data
})

export const firebaseUpdate = (path, values, note=null, data=null) => ({
  type: FIREBASE_UPDATE,
  path,
  values,
  note,
  data
})

export const updateComplete = () => ({
  type: UPDATE_COMPLETE
})
