import React from 'react'
import { logInUser } from '../../actions'
import makeFormFieldsContainer from './FormFieldsContainer'
import makeFormActionContainer from './FormActionContainer'
import Login from '../../components/Login'


const requiredFields = ['email', 'password']
const FormFieldsContainer = makeFormFieldsContainer(requiredFields, logInUser)
const FormActionContainer = makeFormActionContainer(requiredFields, logInUser)

const LoginContainer = Login(FormFieldsContainer, FormActionContainer)

export default LoginContainer
