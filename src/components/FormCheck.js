import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'


const FormCheck = (props) => (
  <div style={styles}>
    <Checkbox
      label={props.label}
      checked={props.values[props.name] || false}
      onCheck={props.handleChange(props.name)}
    />
  </div>
)

let styles = {
  maxWidth: 250
}

FormCheck.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default FormCheck
