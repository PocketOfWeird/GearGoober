export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW'
export const GO_BACKWARD = 'GO_BACKWARD'
export const GO_FORWARD = 'GO_FORWARD'
export const CLEAR_URL = 'CLEAR_URL'

export const setCurrentView = view => ({
  type: SET_CURRENT_VIEW,
  payload: { current: view }
})

export const setDefaultView = () => ({
  type: SET_CURRENT_VIEW,
  payload: { current: ['equipment', 'search'] }
})

export const goBackward = () => ({
  type: GO_BACKWARD
})

export const goForward = () => ({
  type: GO_FORWARD
})

export const clearUrl = () => ({
  type: CLEAR_URL
})
