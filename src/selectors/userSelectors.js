//import tennants from '../../.config/tennants'

export const isLoggedIn = state => {
  if (!state.data.user) return false
  return true
}

export const isRegistered = state => {
  if (!isLoggedIn(state)) return false
  if (!state.data.user.data) return false
  //if (!tennants.keys.includes(state.data.user.data.tennant)) return false
  return true
}

export const getPermissions = state => {
  return {
    labworker: true
  }
}
