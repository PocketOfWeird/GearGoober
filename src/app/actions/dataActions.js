
import { fetchPost } from '../middleware/api'


export const SERVER_STATE = 'SERVER_STATE'
export const CLIENT_GET = 'CLIENT_GET'
export const CLIENT_GET_SUCCESS = 'CLIENT_GET_SUCCESS'

export const serverState = (state) => ({
  type: SERVER_STATE,
  payload: state
})

const clientGetSuccess = (data) => ({
  type: CLIENT_GET_SUCCESS,
  payload: data
})

export const clientGet = (substate, query) => (dispatch) => {
  const body = {
    action: {
      type: CLIENT_GET,
      payload: {},
      meta: { substate, query}
    }
  }
  return dispatch(fetchPost('data', clientGetSuccess, body))
}
