import React, { PropTypes } from 'react'
import AutoComplete from 'material-ui/AutoComplete'


const Search = ({ dataSource, handleUpdateInput }) => (
  <AutoComplete
      id='search'
      type='search'
      floatingLabelText='Search'
      fullWidth={true}
      dataSource={dataSource}
      onUpdateInput={handleUpdateInput}
  />
)

Search.propTypes = {
  dataSource: PropTypes.array.isRequired,
  handleUpdateInput: PropTypes.func.isRequired
}

export default Search
