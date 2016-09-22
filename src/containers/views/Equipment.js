import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Add from '../../components/equipment/Add'
import Edit from '../../components/equipment/Edit'
import Search from '../../components/equipment/Search'
import Browse from '../../components/equipment/Browse'
import Inventory from '../../components/equipment/Inventory'
import { dispatchActivateView } from '../../store/helpers'


const Equipment = ({ view, navigateToView }) => (
  <div>
    <h2>Equipment</h2>

    {view.first() === 'add' &&
      <Add />
    }
    {view.first() === 'edit' &&
      <Edit />
    }
    {view.first() === 'search' &&
      <Search />
    }
    {view.first() === 'browse' &&
      <Browse />
    }
    {view.first() === 'inventory' &&
      <Inventory />
    }
  </div>
)

Equipment.propTypes = {
  view: ImmutablePropTypes.list.isRequired,
  navigateToView: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  view: state.get('activeView').rest()
})

const mapDispatchToProps = (dispatch) => ({
  navigateToView: dispatchActivateView(dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Equipment)
