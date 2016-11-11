import React from 'react'
import { connect } from 'react-redux'
import { formValueChange, formValueValidate, submitForm } from '../../actions'
import { formMapStateToProps } from '../../helpers'
import FormFields from '../../components/FormFields'


const makeMapDispatchToProps = (requiredFields, callback) => dispatch => ({
  handleChange: e => {
    if (e.key === 'Enter') {
      dispatch(submitForm(requiredFields, callback))
    }
    dispatch(formValueChange(e))
  },
  handleBlur: e => dispatch(formValueValidate(e))
})

const makeFormFieldsContainer = (requiredFields, callback) => {
  const mapDispatchToProps = makeMapDispatchToProps(requiredFields, callback)
  return connect(formMapStateToProps, mapDispatchToProps)(FormFields)
}

export default makeFormFieldsContainer
