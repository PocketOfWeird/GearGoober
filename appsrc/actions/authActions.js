import { fetchPostAnonymous } from '../middleware/api'


export const AUTH_SUCCESS = 'AUTH_SUCCESS'

const authSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: {
    token: data[0],
    user: data[1]
  }
})

export const authenticate = (values) => (dispatch) => {
  let body = {
    email: values.get('email'),
    password: values.get('password')
  }
  return dispatch(fetchPostAnonymous('auth', authSuccess, body))
}
