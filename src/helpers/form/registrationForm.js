import normalizeEmail from 'validator/lib/normalizeEmail'
import secrets from '../../../.config/secrets.js'


export const registrationFormValidate = (values, formErrors) => {
  let newErrors = formErrors

  if(values['password'] !== values['passwordVerify']) {
    newErrors['passwordVerify'] = 'Passwords do not match'
  }

  if (values['email']) {
    const email = normalizeEmail(values['email'])
    console.log(email)
    console.log(email.substr(email.indexOf('@') + 1))
    if (!secrets.tennantEmailDomains.includes(email.substr(email.indexOf('@') + 1))) {
      newErrors['email'] = 'Only valid school emails are allowed'
    }
  }

  return newErrors
}
