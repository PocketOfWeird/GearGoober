import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import { formValueChange, formValueValidate, submitForm,
   authenticate } from '../../actions'
import Login from '../../components/forms/Login'


const emptyMap = Map()

const mapStateToProps = (state) => ({
  values: state.form.get('values') || emptyMap,
  errors: state.form.get('errors') || emptyMap
})

const mapDispatchToProps = (dispatch) => ({
  handleChange: e => dispatch(formValueChange(e)),
  handleBlur: e => dispatch(formValueValidate(e)),
  handleSubmit: e => dispatch(submitForm(['email', 'password'], authenticate))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
