export const USER_UPDATED = 'USER_UPDATED'
export const USER_OUT = 'USER_OUT'

export const updateUser = user => ({
  type: USER_UPDATED,
  payload: user
})

export const logOutUser = () => ({
  type: USER_OUT
})
