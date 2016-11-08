import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import IconVideocam from 'material-ui/svg-icons/av/videocam'
import IconEvent from 'material-ui/svg-icons/action/event'
import IconGroup from 'material-ui/svg-icons/social/group'
import IconSettings from 'material-ui/svg-icons/action/settings'


const NavBar = ({ selectedIndex, handleTouchTap }) => (
  <Paper zDepth={1} style={styles}>
    <BottomNavigation selectedIndex={selectedIndex}>
      <BottomNavigationItem
        label='Equipment'
        icon={<IconVideocam />}
        onTouchTap={handleTouchTap('equipment')}
      />
      <BottomNavigationItem
        label='Reserve'
        icon={<IconEvent />}
        onTouchTap={handleTouchTap('reserve')}
      />
      <BottomNavigationItem
        label='Groups'
        icon={<IconGroup />}
        onTouchTap={handleTouchTap('groups')}
      />
      <BottomNavigationItem
        label='Settings'
        icon={<IconSettings />}
        onTouchTap={handleTouchTap('settings')}
      />
    </BottomNavigation>
  </Paper>
)

let styles = {
  position: 'fixed',
  bottom: '0px',
  left: '0px',
  width: '100%'
}

NavBar.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  handleTouchTap: PropTypes.func.isRequired
}

export default NavBar
