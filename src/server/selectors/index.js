//TODO: import { createSelector } from 'reselect'
//import filter from 'lodash/filter'

const categories = (state, user) => state.categories[user.tennant]

const equipment = (state, user) => {

  if (user.is.labworker) {
    // return both equipment in kits and not in kits
    return Object.assign({},
      state.equipment[user.tennant].inKit,
      state.equipment[user.tennant].notInKit
    )
  }
  return state.equipment[user.tennant].notInKit
}

const kits = (state, user) => state.kits[user.tennant]

const reservations = (state, user) => state.reservations[user.tennant][user.id]

export const stateSelector = (state, user) => {
  return Object.assign({},
    {
      categories: categories(state, user),
      equipment: equipment(state, user),
      kits: kits(state, user),
      reservations: reservations(state, user)
    }
  )
}
