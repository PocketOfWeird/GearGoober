import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader} from 'material-ui/Card'
import Logo from '../../components/shared/Logo'
import EquipmentViewsContainer from '../equipment'
import SettingsContainer from '../settings'


const ViewsContainer = ({ tennantName, view }) => (
  <div style={styles}>
    {view[0] === 'equipment' &&
      <EquipmentViewsContainer view={view.slice(1)} />
    }
    {view[0] === 'reserve' &&
      <p>Reservations</p>
    }
    {view[0] === 'groups' &&
      <p>Groups</p>
    }
    {view[0] === 'settings' &&
      <SettingsContainer />
    }
  </div>
)

let styles = {
  margin: '0.15rem'
}

ViewsContainer.propTypes = {
  view: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  view: state.view.current
})

export default connect(mapStateToProps)(ViewsContainer)
