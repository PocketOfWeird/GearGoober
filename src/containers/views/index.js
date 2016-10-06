import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Notification } from 'react-notification'
import { clearViewErrorIfNeeded } from '../../store/actions'
import Equipment from './Equipment'
import Reservations from './Reservations'
import Groups from './Groups'
import Settings from './Settings'


const ViewContainer = ({ view, viewError, handleNotifyClick }) => (
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
    <Notification
      barStyle={styles.notifyStyle}
      actionStyle={styles.actionStyle}
      isActive={viewError ? true : false}
      message={viewError}
      action={'CLOSE'}
      onClick={handleNotifyClick} />
  </div>
)

ViewContainer.propTypes = {
  view: ImmutablePropTypes.list.isRequired,
  viewError: PropTypes.string.isRequired,
  handleNotifyClick: PropTypes.func.isRequired
}

let styles = {
  notifyStyle: {
    bottom: '40rem',
    color: '#000',
    backgroundColor: '#FFC212'
  },
  actionStyle: {
    color: '#1C8ADB'
  }
}


const mapStateToProps = (state) => ({
  view: state.getIn(['views', 'activeView']),
  viewError: state.getIn(['views', 'viewError']) || ''
})

const mapDispatchToProps = (dispatch) => ({
  handleNotifyClick: e => {
    dispatch(clearViewErrorIfNeeded())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewContainer)
