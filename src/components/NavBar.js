import React, { PropTypes } from 'react'

// Styles
const iconStyles = {
  width: '1.5rem',
  height: '1.5rem',
  color: '#1C8ADB'
}

// Component
const NavBar = ({ activeParentView }) => (
  <footer className={'navBar'}>
    <div className={'navContainer'}>
          <div
            className={activeParentView === 'equipment' ?
                          'navGroup active' : 'navGroup'}>
            <a href='#/equipment/'>
              <i className='icon-videocam' />
              <br />
              Equipment
            </a>
          </div>
          <div
            className={activeParentView === 'reservations' ?
                          'navGroup active' : 'navGroup'}>
            <a href='#/reservations/'>
              <i className='icon-calendar' />
              <br />
              Reserve
            </a>
          </div>
          <div
            className={activeParentView === 'groups' ?
                          'navGroup active' : 'navGroup'}>
            <a href='#/groups/'>
              <i className='icon-users' />
              <br />
              Groups
            </a>
          </div>
          <div
            className={activeParentView === 'settings' ?
                          'navGroup active' : 'navGroup'}>
            <a href='#/settings/'>
              <i className='icon-cog' />
              <br />
              Settings
            </a>
          </div>
    </div>
  </footer>
)

NavBar.propTypes = {
  activeParentView: PropTypes.string.isRequired
}

export default NavBar
