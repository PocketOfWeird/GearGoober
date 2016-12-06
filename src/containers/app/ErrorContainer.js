import React from 'react'
import { connect } from 'react-redux'
import {red800} from 'material-ui/styles/colors'
import { clearError } from '../../actions'
import Notification from '../../components/Notification'


const ErrorNote = Notification(red800)

const mapStateToProps = (state) => ({
  open: state.error.message ? true : false,
  message: state.error.message,
  action: 'dangit'
})

const mapDispatchToProps = (dispatch) => ({
  handleAction: e => dispatch(clearError()),
  handleClose: e => dispatch(clearError())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorNote)
