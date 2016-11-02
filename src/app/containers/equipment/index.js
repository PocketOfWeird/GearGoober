import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs'
import ImmutablePropTypes from 'react-immutable-proptypes'
import makeSearchContainer from '../shared/SearchContainer'
import { setCurrentView } from '../../actions'

const SearchContainer = makeSearchContainer('equipment')

const EquipmentViewsContainer = ({ is, view, handleActive }) => (
  <Tabs value={view.first()}>
    <Tab label='Search' value='search' onActive={handleActive}>
      <SearchContainer />
    </Tab>
    {is.labworker &&
      <Tab label='Add' value='add' onActive={handleActive}>
        <p>Add</p>
      </Tab>
    }
    {is.labworker &&
      <Tab label='Inventory' value='inventory' onActive={handleActive}>
        <p>Inventory</p>
      </Tab>
    }

  </Tabs>
)

EquipmentViewsContainer.propTypes = {
  is: PropTypes.object.isRequired,
  view: ImmutablePropTypes.listOf(PropTypes.string.isRequired).isRequired,
  handleActive: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  is: state.user.is
})

const mapDispatchToProps = (dispatch) => ({
  handleActive: tab => dispatch(setCurrentView(['equipment', tab.props.value]))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipmentViewsContainer)
