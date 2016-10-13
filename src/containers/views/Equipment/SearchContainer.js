import React from 'react'
import { connect } from 'react-redux'
import isAlphanumeric from 'validator/lib/isAlphanumeric'
import { getSearchQuery } from '../../../store/helpers'
import { fetchItems, clearItems, setQuery, setViewError,
  clearViewErrorIfNeeded } from '../../../store/actions'
import Search from '../../../components/equipment/Search'


const mapStateToProps = (state) => ({
  search: getSearchQuery(state),
  suggestions: state.getIn(['equipment', 'suggestions']),
  results: state.getIn(['equipment', 'results'])
})

const mapDispatchToProps = (dispatch) => ({
  handleKeyUp: e => {
    e.preventDefault()
    let query = e.target.value
    switch (e.key) {
      case 'Backspace':
        dispatch(clearItems('suggestions'))
        break;
      default:
        if (query.length > 2) {
          if (isAlphanumeric(query)) {
            dispatch(clearViewErrorIfNeeded())
            if (e.key === 'Enter') {
              dispatch(clearItems('suggestions'))
              dispatch(fetchItems('results', query))
            } else {
              dispatch(fetchItems('suggestions', query))
            }
          } else {
            dispatch(setQuery(query))
            dispatch(setViewError("Search can't contain special characters"))
          }
        }
        break;
    }
  },
  handleChange: e => {
    e.preventDefault()
    let query = e.target.value
    dispatch(setQuery(query))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
