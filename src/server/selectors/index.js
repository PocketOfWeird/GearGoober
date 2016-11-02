import userQuery from './users'
import equipmentQuery from './equipment'
export { getSpecificUser } from './users'


export const stateSelector = (state, { user, substate, query }) => {
  switch (substate) {
    case 'tennants':
      return { tennant: state.tennants[user.tennant] }
    case 'users':
      return userQuery(state.users[user.tennant], user, query)
    case 'equipment':
      return equipmentQuery(state, user, query)
    default:
      return {}
  }
}
