import React from 'react'
import { connect } from 'react-redux'
import { valueChange } from '../../actions'
import Search from '../../components/shared/Search'


const mapStateToProps = (state) => ({
  value: state.form.getIn(['search', 'value']) || '',
  error: state.form.getIn(['search', 'error']) || ''
})

const mapDispatchToProps = (dispatch) => ({
  handleChange: e => {
    e.preventDefault()
    dispatch(valueChange(e))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
