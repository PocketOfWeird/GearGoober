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

export const mapRegistrationDataToUser = (formValues, authUser, tennant) => {
  return {
    email: authUser.email,
    firstName: formValues.firstName,
    fullName: formValues.firstName + ' ' + formValues.lastName,
    groups: { [formValues.group]: true },
    is: {},
    lastName: formValues.lastName,
    phone: formValues.phone,
    tennant: tennant,
    uid: authUser.uid
  }
}
