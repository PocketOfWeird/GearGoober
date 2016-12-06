import React, { PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


const qytValues = () => Array.from(Array(101).keys())

const QYTField = ({ qytValue }) => (
  <SelectField
    floatingLabelText='QYT'
    value={qytValue}
    style={styles}
  >
    {qytValues().map((value, key) =>
      <MenuItem
        key={key}
        value={value}
        primaryText={value}
      />
    )}
  </SelectField>
)

let styles = {
  width: 50
}

QYTField.propTypes = {
  qytValue: PropTypes.number.isRequired
}


export default QYTField
