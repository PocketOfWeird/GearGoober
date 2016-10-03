import { isValidValue } from '../helpers'


export const SET_FORM_VALUE = 'SET_FORM_VALUE'
export const CLEAR_FORM = 'CLEAR_FORM'

export const clearForm = () => ({
  type: CLEAR_FORM
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
