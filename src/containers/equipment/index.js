import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs'
import { getPermissions } from '../../selectors'
import makeSearchContainer from '../shared/SearchContainer'
import EditEquipmentContainer from '../forms/EditEquipmentContainer'
import { setCurrentView } from '../../actions'

const SearchContainer = makeSearchContainer('equipment')

const EquipmentViewsContainer = ({ is, view, handleActive }) => (
  <Tabs value={view[0]}>
    <Tab label='Search' value='search' onActive={handleActive}>
      <SearchContainer />
    </Tab>
    {is.labworker &&
      <Tab label='Add' value='add' onActive={handleActive}>
        <EditEquipmentContainer />
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
  view: PropTypes.array.isRequired,
  handleActive: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  is: getPermissions(state)
})

const mapDispatchToProps = (dispatch) => ({
  handleActive: tab => dispatch(setCurrentView(['equipment', tab.props.value]))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipmentViewsContainer)
