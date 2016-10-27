export const RAISE_ERROR = 'RAISE_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export const raiseError = (err) => ({
  type: RAISE_ERROR,
  payload: {
    message: err.message,
    timestamp: Date.now()
  }
})

export const clearError = () => ({
  type: CLEAR_ERROR,
  payload: {
    message: ''
  }
})
