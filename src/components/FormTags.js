import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { formTagMap } from '../helpers'

const FormTags = (props) => (
  <div>
    <TextField
      name={props.name}
      hintText={'Add ' + props.label}
      floatingLabelText={props.label}
      fullWidth={true}
      errorText={props.error}
      onKeyDown={props.handleChange(props.defaultTagState)}
    />
    <div style={styles}>
      {formTagMap(props.tags, props.name,
        props.handleTagDelete, props.customColor)}
    </div>
  </div>
)

let styles = {
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: 14
}

FormTags.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  tags: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleTagDelete: PropTypes.func.isRequired,
  defaultTagState: PropTypes.object,
  customColor: PropTypes.func
}

export default FormTags
