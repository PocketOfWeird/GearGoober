import { Map } from 'immutable'
import isEmail from 'validator/lib/isEmail'
import isAlpha from 'validator/lib/isAlpha'
import isMobilePhone from 'validator/lib/isMobilePhone'


export const validateValue = (value, type) => {
  switch (type) {
    case 'email':
      return isEmail(value) ? '' : 'Invalid email address'
    case 'firstName':
    case 'lastName':
      return isAlpha(value) ? '' : 'Invalid text'
    default:
      return ''
  }
}

export const validateForm = (values, requiredFields) => {
  let errors = {}

  requiredFields.forEach(field => {

    const validationError = validateValue(values[field], field)
    if (validationError !== '') {
      errors[field] = validationError
    }

    if (!values[field]) {
      errors[field] = 'Required'
    }

  })

  return errors
}
