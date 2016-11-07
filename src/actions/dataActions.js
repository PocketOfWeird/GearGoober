export const FIREBASE_STATE = 'FIREBASE_STATE'
export const HORIZON_FETCH = 'HORIZON_FETCH'

export const firebaseState = (state) => ({
  type: FIREBASE_STATE,
  payload: state
})

export const horizonFetch = (collection, query) => ({
  type: HORIZON_FETCH,
  payload: {},
  meta: { collection, query }
})
