import React from 'react'
import { connect } from 'react-redux'
import { formValueChange, formValueValidate, submitForm } from '../../actions'
import { isLoading } from '../../selectors'
import FormFields from '../../components/FormFields'


const mapStateToProps = state => ({
  values: state.form.values,
  errors: state.form.errors,
  isLoading: isLoading(state)
})

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
  return connect(mapStateToProps, mapDispatchToProps)(FormFields)
}

export default makeFormFieldsContainer
