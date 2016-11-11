import React, { PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


const FormSelect = (props) => (
  <SelectField
    id={props.name}
    floatingLabelText={props.label}
    fullWidth={true}
    value={props.values[props.name] || ''}
    errorText={props.errors[props.name] || ''}
    disabled={props.isLoading}
    onChange={props.handleChange}
  >
    {props.children.map((item, key) =>
      <MenuItem
        key={key}
        value={item.value}
        primaryText={item.name}
        secondaryText={item.subName ? item.subName : ''}
      />
    )}
  </SelectField>
)

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default FormSelect
