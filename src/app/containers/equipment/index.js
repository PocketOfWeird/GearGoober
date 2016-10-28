import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs'
import ImmutablePropTypes from 'react-immutable-proptypes'
import SearchContainer from '../shared/SearchContainer'
import { setCurrentView } from '../../actions'


const EquipmentViewsContainer = ({ permissions, view, handleActive }) => (
  <Tabs value={view.first()}>
    <Tab label='Search' value='search' onActive={handleActive}>
      <SearchContainer />
    </Tab>
    {permissions.has('labworker') &&
      <Tab label='Add' value='add' onActive={handleActive}>
        <p>Add</p>
      </Tab>
    }
    {permissions.has('labworker') &&
      <Tab label='Inventory' value='inventory' onActive={handleActive}>
        <p>Inventory</p>
      </Tab>
    }

  </Tabs>
)

EquipmentViewsContainer.propTypes = {
  permissions: ImmutablePropTypes.map.isRequired,
  view: ImmutablePropTypes.listOf(PropTypes.string.isRequired).isRequired,
  handleActive: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  permissions: state.user.get('permissions')
})

const mapDispatchToProps = (dispatch) => ({
  handleActive: tab => dispatch(setCurrentView(['equipment', tab.props.value]))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipmentViewsContainer)
