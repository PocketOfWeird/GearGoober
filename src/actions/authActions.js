import { fetchPostAnonymous } from '../middleware/api'


export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_CLEAR = 'AUTH_CLEAR'

const authSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: {
    token: data[0],
    user: data[1]
  }
})

export const unauthenticate = () => ({
  type: AUTH_CLEAR
})

export const authenticate = (values) => (dispatch) => {
  let body = {
    email: values.get('email'),
    password: values.get('password')
  }
  return dispatch(fetchPostAnonymous('auth', authSuccess, body))
}
