import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'


const Search = ({ value, error, handleChange }) => (
  <TextField
      id='search'
      type='search'
      floatingLabelText='Search'
      value={value}
      errorText={error}
      onChange={handleChange} />
)

Search.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Search
