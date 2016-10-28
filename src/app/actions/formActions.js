import { validateValue, validateForm } from '../helpers'


export const FORM_VALUE_CHANGE = 'FORM_VALUE_CHANGE'
export const FORM_VALUE_VALIDATE = 'FORM_VALUE_VALIDATE'
export const FORM_ERROR = 'FORM_ERROR'
export const FORM_RESET = 'FORM_RESET'

export const formValueChange = (e) => ({
  type: FORM_VALUE_CHANGE,
  payload: {
    name: e.target.name,
    value: e.target.value
  }
})

export const formValueValidate = (e) => ({
  type: FORM_VALUE_VALIDATE,
  payload: {
    name: e.target.name,
    error: validateValue(e.target.value, e.target.type)
  }
})

const formError = (formErrors) => ({
  type: FORM_ERROR,
  payload: formErrors
})

export const formReset = () => ({
  type: FORM_RESET
})

export const submitForm = (requiredFields, callback) => (dispatch, getState) => {
  let values = getState().form.get('values')
  let formErrors = validateForm(values, requiredFields)
  if (formErrors.size !== 0) {
    return dispatch(formError(formErrors))
  }
  return dispatch(callback(values))
}
