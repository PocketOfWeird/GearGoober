import React from 'react'
import { connect } from 'react-redux'
import { formValueChange } from '../../actions'
import { formMapStateToProps } from '../../helpers'
import FormTags from '../../components/FormTags'


const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(formValueChange(e))
})

export default connect(
  formMapStateToProps,
  mapDispatchToProps
)(FormTags)
