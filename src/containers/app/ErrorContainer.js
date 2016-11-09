import React from 'react'
import { connect } from 'react-redux'
import { clearError } from '../../actions'
import Notification from '../../components/shared/Notification'


const mapStateToProps = (state) => ({
  open: state.error ? true : false,
  message: 'state.error',
  action: 'dangit'
})

const mapDispatchToProps = (dispatch) => ({
  handleAction: e => dispatch(clearError()),
  handleClose: e => dispatch(clearError())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)
