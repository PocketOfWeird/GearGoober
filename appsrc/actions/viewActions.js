import { List } from 'immutable'


export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW'
export const GO_BACKWARD = 'GO_BACKWARD'
export const GO_FORWARD = 'GO_FORWARD'

export const setCurrentView = (view) => ({
  type: SET_CURRENT_VIEW,
  payload: List(view)
})

export const goBackward = () => ({
  type: GO_BACKWARD
})

export const goForward = () => ({
  type: GO_FORWARD
})
