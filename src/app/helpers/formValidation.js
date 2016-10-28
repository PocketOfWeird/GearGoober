import { Map } from 'immutable'
import isEmail from 'validator/lib/isEmail'


export const validateValue = (value, type) => {
  switch (type) {
    case 'email':
      return isEmail(value) ? '' : 'Invalid email address'
    default:
      return ''
  }
}

export const validateForm = (values, requiredFields) => {
  let errors = {}

  requiredFields.forEach(field => {
    if (!values.get(field)) {
      errors[field] = 'Required'
    }
  })

  return Map(errors)
}
