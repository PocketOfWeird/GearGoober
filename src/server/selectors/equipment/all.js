export const getAllEquipAndKits = (state, user) => {
  return user.is.labworker ? [
    // NOTE: returns an array of kits and equipment both in kits and not in kits
    ...state.equipment[user.tennant].inKit.data,
    ...state.equipment[user.tennant].notInKit.data,
    ...state.kits[user.tennant].data
  ] : [
    // NOTE: returns an array of kits and equipment not in kits
    ...state.equipment[user.tennant].notInKit.data,
    ...state.kits[user.tennant].data
  ]
}
