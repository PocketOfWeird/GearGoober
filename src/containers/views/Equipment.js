import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import EquipNav from '../../components/equipment/EquipNav'
import EquipForm from '../../components/equipment/EquipForm'
import Details from '../../components/equipment/Details'
import Search from '../../components/equipment/Search'
import Browse from '../../components/equipment/Browse'
import Inventory from '../../components/equipment/Inventory'


const Equipment = ({ view }) => (
  <div>
    {!view.first() &&
      <EquipNav />
    }
    {view.first() === 'add' &&
      <EquipForm mode={'add'} />
    }
    {view.first() === 'edit' &&
      <EquipForm mode={'edit'} />
    }
    {view.first() === 'details' &&
      <Details />
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
  view: ImmutablePropTypes.list.isRequired
}

const mapStateToProps = (state) => ({
  view: state.get('activeView').rest()
})


export default connect(mapStateToProps)(Equipment)
