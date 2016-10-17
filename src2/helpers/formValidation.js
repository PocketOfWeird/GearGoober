import isAscii from 'validator/lib/isAscii'
import isAlphanumeric from 'validator/lib/isAlphanumeric'
import isEmail from 'validator/lib/isEmail'


export const validate = (value, type) => {

  if (typeof(value) !== 'string'){
    return 'Valdation error: only string values are allowed'
  }

  switch (type) {
    case 'text':
      return isAscii(value) ? '' : 'Special characters aren\'t allowed'
    case 'search':
      return isAlphanumeric(value) ? '' : 'Spaces and symbols aren\'t allowed'
    case 'email':
      return isEmail(value) ? '' : 'Invalid email address'
    default:
      return ''
  }
}
