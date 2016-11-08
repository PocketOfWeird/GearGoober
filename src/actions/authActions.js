export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_CLEAR = 'AUTH_CLEAR'

const authSuccess = (userData) => ({
  type: AUTH_SUCCESS,
  payload: userData
})

export const authClear = () => ({
  type: AUTH_CLEAR
})
