import React from 'react'
import Paper from 'material-ui/Paper'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import IconVideocam from 'material-ui/svg-icons/av/videocam'
import IconEvent from 'material-ui/svg-icons/action/event'
import IconGroup from 'material-ui/svg-icons/social/group'
import IconSettings from 'material-ui/svg-icons/action/settings'


const NavBar = () => (
  <Paper zDepth={1} style={styles}>
    <BottomNavigation selectedIndex={0}>
      <BottomNavigationItem
        label='Equipment'
        icon={<IconVideocam />}
      />
      <BottomNavigationItem
        label='Reserve'
        icon={<IconEvent />}
      />
      <BottomNavigationItem
        label='Groups'
        icon={<IconGroup />}
      />
      <BottomNavigationItem
        label='Settings'
        icon={<IconSettings />}
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


export default NavBar
