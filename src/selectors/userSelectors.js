export const isLoggedIn = state => {
  if (!state.user || !state.user.email) return false
  return true
}

export const getPermissions = state => {
  return state.user.is || {}
}
