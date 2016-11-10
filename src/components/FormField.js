import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'

const FormField = ({ field, label, type, ...rest }) => (
  <TextField
     name={field}
     type={type ? type : field}
     floatingLabelText={label}
     fullWidth={true}
     {...rest}
   />
)

FormField.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default FormField
