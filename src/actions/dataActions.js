export const HORIZON_STATE = 'HORIZON_STATE'
export const HORIZON_FETCH = 'HORIZON_FETCH'

export const horizonState = (state) => ({
  type: HORIZON_STATE,
  payload: state
})

export const horizonFetch = (collection, query) => ({
  type: HORIZON_FETCH,
  payload: {},
  meta: { collection, query }
})
