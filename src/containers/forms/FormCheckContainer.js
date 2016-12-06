import React from 'react'
import { connect } from 'react-redux'
import { formSelectChange } from '../../actions'
import { formMapStateToProps } from '../../helpers'
import FormCheck from '../../components/FormCheck'


const mapDispatchToProps = dispatch => ({
  handleChange: name => (e, checked) => dispatch(formSelectChange(name, checked))
})

export default connect(
  formMapStateToProps,
  mapDispatchToProps
)(FormCheck)
