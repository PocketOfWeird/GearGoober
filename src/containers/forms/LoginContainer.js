import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { formValueChange, formValueValidate, submitForm,
logInUser } from '../../actions'
import Login from '../../components/forms/Login'


const requiredFields = ['email', 'password']

const mapStateToProps = (state) => ({
  values: state.form.values,
  errors: state.form.errors
})

const mapDispatchToProps = (dispatch) => ({
  handleChange: e => {
    if (e.key === 'Enter') {
      dispatch(submitForm(requiredFields, logInUser))
    }
    dispatch(formValueChange(e))
  },
  handleBlur: e => dispatch(formValueValidate(e)),
  handleSubmit: e => dispatch(submitForm(requiredFields, logInUser))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
