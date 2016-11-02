import { suggestionFilter } from '../helpers'

export const getSpecificUser = (userState, id) => {

  const index = userState.active.index[id]
  const user = userState.active.data[index]

  if (!user) {
    const inactiveIndex = userState.inactive.index[id]
    if (userState.inactive.data[inactiveIndex]) {
      return user
    } else {
      return null
    }
  }
  return user
}

export const userQuery = (state, user, query) => {
  switch (query.type) {
    case 'active':
      if (user.is.admin) return { users: state.active.data }
      return {}
    case 'inactive':
      if (user.is.admin) return { users: state.inactive.data }
      return {}
    case 'active and inactive':
      if (user.is.admin) return { users: [...state.active.data, ...state.inactive.data] }
      return {}
    case 'specific':
      if (user.is.admin) { userDetails: getSpecificUser(state, query.id) }
      return {}
    case 'suggestions':
      if (user.is.labworker) return { userSuggestions: suggestionFilter(
        state.active.data,
        query.text.toLowerCase(),
        'lowerName'
      ) }
      return {}
    default:
      return {}
  }
}
