import { login, logout, register } from '../db'
import { firebaseUpdate } from './dataActions'
import { mapRegistrationDataToUser } from '../helpers'
import { clearUrl, setDefaultView } from './viewActions'


export const USER_UPDATED = 'USER_UPDATED'
export const USER_OUT = 'USER_OUT'
export const LOGGING_IN = 'LOGGING_IN'
export const REGISTER_USER = 'REGISTER_USER'

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
  dispatch({ type: LOGGING_IN })
  login(values.email, values.password)
  .catch(err => console.error(err))
}

export const registerUser = values => (dispatch, getState) => {
  register(values.email, values.passwordVerify)
  .then(user => {
    const userData = mapRegistrationDataToUser(values, user, getState().tennant)
    dispatch(firebaseUpdate('/users/' + user.uid, userData))
    dispatch(setDefaultView())
    dispatch(clearUrl())
  })
}
