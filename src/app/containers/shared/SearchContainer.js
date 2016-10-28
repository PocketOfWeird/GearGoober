import React from 'react'
import { connect } from 'react-redux'
import { getSuggestions } from '../../actions'
import Search from '../../components/shared/Search'


const mapStateToProps = (state) => ({
  dataSource: state.equipmentSearch.get('suggestions'),
})

const mapDispatchToProps = (dispatch) => ({
  handleUpdateInput: value => {
    dispatch(getSuggestions(value, 'equipment'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
