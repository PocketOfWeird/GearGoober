import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import EquipmentViewsContainer from '../equipment'


const ViewsContainer = ({ view }) => (
  <div style={styles}>
    {view.first() === 'equipment' &&
      <EquipmentViewsContainer view={view.rest()} />
    }
    {view.first() === 'reserve' &&
      <p>Reservations</p>
    }
    {view.first() === 'groups' &&
      <p>Groups</p>
    }
    {view.first() === 'settings' &&
      <p>Settings</p>
    }
  </div>
)

let styles = {
  margin: '0.15rem'
}

ViewsContainer.propTypes = {
  view: ImmutablePropTypes.listOf(PropTypes.string.isRequired).isRequired
}

const mapStateToProps = (state) => ({
  view: state.view.get('current')
})

export default connect(mapStateToProps)(ViewsContainer)
