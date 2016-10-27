const HYDRATE_FROM_SNAPSHOT = 'HYDRATE_FROM_SNAPSHOT'

const hydrateFromSnapshot = (snapshot) => ({
  type: HYDRATE_FROM_SNAPSHOT,
  payload: snapshot
})

module.exports = {
  HYDRATE_FROM_SNAPSHOT,
  hydrateFromSnapshot
}
