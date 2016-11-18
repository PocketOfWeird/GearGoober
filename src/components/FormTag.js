import React, { PropTypes } from 'react'
import Chip from 'material-ui/Chip'


const FormTag = ({ color, label, ...rest }) => (
  <Chip
    style={styles}
    backgroundColor={color}
    style={styles}
    {...rest}
  >
    {label}
  </Chip>
)

let styles = {
  margin: 4
}

FormTag.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default FormTag
