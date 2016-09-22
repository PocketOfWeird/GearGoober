import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Equipment from './Equipment'
import Reservations from './Reservations'
import Groups from './Groups'
import Settings from './Settings'


const ViewContainer = ({ view }) => (
  <div style={{padding:'2rem'}}>
    {view.first() === 'equipment' &&
      <Equipment />
    }
    {view.first() === 'reservations' &&
      <Reservations />
    }
    {view.first() === 'groups' &&
      <Groups />
    }
    {view.first() === 'settings' &&
      <Settings />
    }
  </div>
)

ViewContainer.propTypes = {
  view: ImmutablePropTypes.list.isRequired
}

const mapStateToProps = (state) => ({
  view: state.get('activeView')
})

export default connect(
  mapStateToProps
)(ViewContainer)
