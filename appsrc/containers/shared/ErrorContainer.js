import React from 'react'
import { connect } from 'react-redux'
import { clearError } from '../../actions'
import Notification from '../../components/shared/Notification'


const mapStateToProps = (state) => ({
  open: state.error.get('message') ? true : false,
  message: state.error.get('message'),
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
