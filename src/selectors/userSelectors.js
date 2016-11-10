export const isLoggedIn = state => {
  if (!state.user || !state.user.email) return false
  return false
}

export const getPermissions = state => {
  return state.user.is
}
