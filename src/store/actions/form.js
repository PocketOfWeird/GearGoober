import { isValidValue } from '../helpers'


export const SET_FORM_VALUE = 'SET_FORM_VALUE'
export const CLEAR_FORM = 'CLEAR_FORM'
export const CLONE_FROM_STATE = 'CLONE_FROM_STATE'

export const clearForm = () => ({
  type: CLEAR_FORM
})

export const cloneFromState = (payload) => ({
  type: CLONE_FROM_STATE,
  payload: payload
})

const setFormValue = (id, value, isValid) => ({
  type: SET_FORM_VALUE,
  valueId: id,
  payload: value
})

export const setValue = (id, value, type) => {
    switch (isValidValue(value, type)) {
      case true:
        return setFormValue(id, value, true)
      case false:
        return setFormValue(id, value, false)
      default:
        return setFormValue(id, value, false)
    }
}
