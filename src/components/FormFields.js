import React, { PropTypes } from 'react'
import FormField from './FormField'


const FormFields = (props) => (
  <div>
    {props.children.map((child, key) =>
      <FormField
        key={key}
        field={child.props.name}
        label={child.props.label}
        type={child.props.type}
        value={props.values[child.props.name] || ''}
        errorText={props.errors[child.props.name] || ''}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        disabled={props.isLoading}
      />
    )}
  </div>
)

FormFields.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired
}


export default FormFields
