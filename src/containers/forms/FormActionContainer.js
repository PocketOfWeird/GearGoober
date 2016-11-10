import React from 'react'
import { connect } from 'react-redux'
import { formValueChange, formValueValidate, submitForm } from '../../actions'
import { isLoading } from '../../selectors'
import FormAction from '../../components/FormAction'

const mapStateToProps = state => ({
  isLoading: isLoading(state)
})

const makeMapDispatchToProps = (requiredFields, callback) => dispatch => ({
  handleSubmit: e => dispatch(submitForm(requiredFields, callback))
})

const makeFormActionContainer = (requiredFields, callback) => {
  const mapDispatchToProps = makeMapDispatchToProps(requiredFields, callback)
  return connect(mapStateToProps, mapDispatchToProps)(FormAction)
}

export default makeFormActionContainer
