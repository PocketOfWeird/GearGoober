import { login, logout } from '../db'


export const USER_UPDATED = 'USER_UPDATED'
export const USER_OUT = 'USER_OUT'
export const LOGGING_IN = 'LOGGING_IN'

export const updateUser = user => ({
  type: USER_UPDATED,
  payload: user
})

export const logOutUser = () => dispatch => {
  logout()
  .then(() => dispatch({ type: USER_OUT }) )
  .catch(err => console.error(err))
}

export const logInUser = values => dispatch => {
  login(values.email, values.password)
  .then(user => dispatch({ type: LOGGING_IN }))
  .catch(err => console.error(err))
}
