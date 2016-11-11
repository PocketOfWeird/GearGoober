import React from 'react'
import { connect } from 'react-redux'
import { formSelectChange } from '../../actions'
import { formMapStateToProps } from '../../helpers'
import FormSelect from '../../components/FormSelect'


const defaultChangeHandler = dispatch => name => (e, key, value) =>
  dispatch(formSelectChange(name, value))

const makeMapDispatchToProps = changeHandler => dispatch => ({
  handleChange: changeHandler(dispatch)
})

const makeFormSelectContainer = (changeHandler = defaultChangeHandler) => {
  const mapDispatchToProps = makeMapDispatchToProps(changeHandler)
  return connect(formMapStateToProps, mapDispatchToProps)(FormSelect)
}

export default makeFormSelectContainer
