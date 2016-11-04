import tennants from '../../.config/tennants'

export const isRegistered = state => {
  if (!state.data.user) return false
  if (!state.data.user.data) return false
  if (!tennants.keys.includes(state.data.user.data.tennant)) return false
  return true
}
