import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../actions'
import makeFormFieldsContainer from './FormFieldsContainer'
import makeFormActionContainer from './FormActionContainer'
import makeFormSelectContainer from './FormSelectContainer'
import Registration from '../../components/Registration'


const requiredFields = ['email', 'password', 'passwordVerify', 'group']
const FormFieldsContainer = makeFormFieldsContainer(requiredFields, registerUser)
const FormActionContainer = makeFormActionContainer(requiredFields, registerUser)
const FormSelectContainer = makeFormSelectContainer()

const RegistrationContainer = Registration(
  FormFieldsContainer, FormActionContainer, FormSelectContainer
)

const mapStateToProps = state => ({
  groups: state.data.groups || []
})

export default connect(mapStateToProps)(RegistrationContainer)
