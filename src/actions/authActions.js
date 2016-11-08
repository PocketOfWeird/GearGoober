export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_CLEAR = 'AUTH_CLEAR'

export const authSuccess = (authData) => ({
  type: AUTH_SUCCESS,
  payload: authData
})

export const authClear = () => ({
  type: AUTH_CLEAR
})
