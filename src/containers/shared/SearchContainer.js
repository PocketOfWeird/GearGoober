import React from 'react'
import { connect } from 'react-redux'
import Search from '../../components/shared/Search'
import { horizonFetch } from '../../actions'


const makeMapStateToProps = collection => state => ({
  dataSource: state.data[collection] || [],
})

const makeMapDispatchToProps = collection => dispatch => ({
  handleUpdateInput: value => {
    if (value.length > 2) {
      dispatch(horizonFetch(collection, {
        lowerName: value.toLowerCase()
      }))
    }
  }
})

const makeSearchContainer = collection => {
  const mapStateToProps = makeMapStateToProps(collection)
  const mapDispatchToProps = makeMapDispatchToProps(collection)
  return connect(mapStateToProps, mapDispatchToProps)(Search)
}

export default makeSearchContainer
