import React, { PropTypes } from 'react'
import Snackbar from 'material-ui/Snackbar'


const Notification = ({open, message, action, handleAction, handleClose}) => (
  <Snackbar
    open={open}
    message={message}
    action={action}
    onActionTouchTap={handleAction}
    onRequestClose={handleClose}
  />
)

let styles = {
  position: 'fixed',
  bottom: '0px',
  left: '0px',
  width: '100%',
  zIndex: '2'
}

Notification.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default Notification
