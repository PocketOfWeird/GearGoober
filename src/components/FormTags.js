import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'


const FormTags = (props) => (
  <TextField
    name={props.name}
    floatingLabelText={props.label}
    multiLine={true}
    fullWidth={true}
    value={props.values[props.name]}
    errorText={props.errors[props.name]}
    onChange={props.handleChange}
  />
)

FormTags.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default FormTags
