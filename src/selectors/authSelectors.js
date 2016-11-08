export const isLoggedIn = state => {
  if (!state.auth.user) return false
  return true
}

export const isRegistered = state => {
  if (!isLoggedIn(state)) return false
  return true
}

export const getPermissions = state => {
  return {
    labworker: true
  }
}
