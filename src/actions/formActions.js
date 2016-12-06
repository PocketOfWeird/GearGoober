import { validateValue, validateForm, isEmptyObject } from '../helpers'


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

export const formSelectChange = (name, value) => ({
  type: FORM_VALUE_CHANGE,
  payload: {
    name,
    value
  }
})


export const formValueValidate = e => ({
  type: FORM_VALUE_VALIDATE,
  payload: {
    name: e.target.name,
    value: validateValue(e.target.value, e.target.type)
  }
})

const formError = (formErrors) => ({
  type: FORM_ERROR,
  payload: formErrors
})

export const formReset = () => ({
  type: FORM_RESET
})

export const submitForm = (
  requiredFields, callback, specialValidation=undefined
) => (dispatch, getState) => {
  const values = getState().form.values
  let formErrors = validateForm(values, requiredFields)
  if (specialValidation !== undefined) {
    formErrors = specialValidation(values, formErrors)
  }
  if (!isEmptyObject(formErrors)) {
    return dispatch(formError(formErrors))
  }
  dispatch(formReset())
  return dispatch(callback(values))
}
