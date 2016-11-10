import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'


const FormAction = (props) => (
  <RaisedButton
    label={props.label}
    onTouchTap={props.handleSubmit}
    disabled={props.isLoading}
  />
)

FormAction.propTypes = {
  label: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default FormAction
