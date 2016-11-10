import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../actions'
import makeFormFieldsContainer from './FormFieldsContainer'
import makeFormActionContainer from './FormActionContainer'
import Registration from '../../components/Registration'


const requiredFields = ['email', 'password', 'verifiedPassword']
const FormFieldsContainer = makeFormFieldsContainer(requiredFields, registerUser)
const FormActionContainer = makeFormActionContainer(requiredFields, registerUser)

const RegistrationContainer = Registration(FormFieldsContainer, FormActionContainer)

const mapStateToProps = state => ({
  tennant: state.view.current[1]
})

export default connect(mapStateToProps)(RegistrationContainer)
