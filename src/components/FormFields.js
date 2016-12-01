import React, { PropTypes } from 'react'
import FormField from './FormField'


const FormFields = (props) => (
  <div>
    {props.children.length &&
      props.children.map((child, key) =>
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
    {!props.children.length &&
      <FormField
        field={props.children.props.name}
        label={props.children.props.label}
        type={props.children.props.type}
        value={props.values[props.children.props.name] || ''}
        errorText={props.errors[props.children.props.name] || ''}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        disabled={props.isLoading}
      />
    }
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
