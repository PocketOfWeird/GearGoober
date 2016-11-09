import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { formValueChange, formValueValidate, submitForm,
logInUser } from '../../actions'
import { isLoading } from '../../selectors'
import Login from '../../components/Login'


const requiredFields = ['email', 'password']

const mapStateToProps = (state) => ({
  values: state.form.values,
  errors: state.form.errors,
  isLoading: isLoading(state)
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
