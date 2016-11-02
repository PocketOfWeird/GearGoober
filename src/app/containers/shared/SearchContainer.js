import React from 'react'
import { connect } from 'react-redux'
import Search from '../../components/shared/Search'
import { clientGet } from '../../actions'


const makeMapStateToProps = substate => state => ({
  dataSource: state.data[substate + 'Suggestions'] || [],
})

const makeMapDispatchToProps = substate => dispatch => ({
  handleUpdateInput: value => {
    if (value.length > 2) {
      dispatch(clientGet(substate, {
        type: 'suggestions', text: value.toLowerCase()
      }))
    }
  }
})

const makeSearchContainer = substate => {
  const mapStateToProps = makeMapStateToProps(substate)
  const mapDispatchToProps = makeMapDispatchToProps(substate)
  return connect(mapStateToProps, mapDispatchToProps)(Search)
}

export default makeSearchContainer
