import React from 'react'
import { connect } from 'react-redux'
import {green600} from 'material-ui/styles/colors'
import { clearNote } from '../../actions'
import Notification from '../../components/Notification'


const Note = Notification(green600)

const mapStateToProps = (state) => ({
  open: state.note ? true : false,
  message: state.note,
  action: 'okay'
})

const mapDispatchToProps = (dispatch) => ({
  handleAction: e => dispatch(clearNote()),
  handleClose: e => dispatch(clearNote())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note)
