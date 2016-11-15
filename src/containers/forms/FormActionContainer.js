import React from 'react'
import { connect } from 'react-redux'
import { formValueChange, formValueValidate, submitForm } from '../../actions'
import { isLoading } from '../../selectors'
import FormAction from '../../components/FormAction'

const mapStateToProps = state => ({
  isLoading: isLoading(state)
})

const makeMapDispatchToProps = (requiredFields, callback, specialValidation) => dispatch => ({
  handleSubmit: e => dispatch(submitForm(requiredFields, callback, specialValidation))
})

const makeFormActionContainer = (requiredFields, callback, specialValidation=undefined) => {
  const mapDispatchToProps = makeMapDispatchToProps(requiredFields, callback, specialValidation)
  return connect(mapStateToProps, mapDispatchToProps)(FormAction)
}

export default makeFormActionContainer
