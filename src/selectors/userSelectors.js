export const isLoggedIn = state => {
  if (!state.user.email) return false
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
