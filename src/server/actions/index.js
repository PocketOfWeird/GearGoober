export const HYDRATE_FROM_SNAPSHOT = 'HYDRATE_FROM_SNAPSHOT'

export const hydrateFromSnapshot = (snapshot) => ({
  type: HYDRATE_FROM_SNAPSHOT,
  payload: snapshot
})
