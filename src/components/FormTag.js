import React, { PropTypes } from 'react'
import Chip from 'material-ui/Chip'
import QYTField from './QYTField'


const FormTag = ({ color, label, enhanced, qytValue, ...rest }) => (
  <Chip
    backgroundColor={color}
    style={styles}
    {...rest}
  >
    {label}
    <div></div>
    {enhanced &&
      <QYTField qytValue={qytValue || 1} />
    }
  </Chip>
)

let styles = {
  margin: 4
}

FormTag.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  enhanced: PropTypes.bool,
  qytValue: PropTypes.number
}

export default FormTag
