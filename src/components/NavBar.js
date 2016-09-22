import React, { PropTypes } from 'react'

// Styles
const iconStyles = {
  width: '1.5rem',
  height: '1.5rem',
  color: '#1C8ADB'
}

// Component
const NavBar = ({ activeParentView, onNavClick }) => (
  <footer className={'navBar'}>
    <div className={'navContainer'}>
          <div
            className={activeParentView === 'equipment' ?
                          'navGroup active' : 'navGroup'}
            onClick={e => {
              e.preventDefault()
              onNavClick(['equipment','search'])
            }}>
            <span>
              <i className='icon-videocam' />
              <br />
              Equipment
            </span>
          </div>
          <div
            className={activeParentView === 'reservations' ?
                          'navGroup active' : 'navGroup'}
            onClick={e => {
              e.preventDefault()
              onNavClick(['reservations'])
            }}>
            <span>
              <i className='icon-calendar' />
              <br />
              Reserve
            </span>
          </div>
          <div
            className={activeParentView === 'groups' ?
                          'navGroup active' : 'navGroup'}
            onClick={e => {
              e.preventDefault()
              onNavClick(['groups'])
            }}>
            <span>
              <i className='icon-users' />
              <br />
              Groups
            </span>
          </div>
          <div
            className={activeParentView === 'settings' ?
                          'navGroup active' : 'navGroup'}
            onClick={e => {
              e.preventDefault()
              onNavClick(['settings'])
            }}>
            <span>
              <i className='icon-cog' />
              <br />
              Settings
            </span>
          </div>
    </div>
  </footer>
)

NavBar.propTypes = {
  activeParentView: PropTypes.string.isRequired,
  onNavClick: PropTypes.func.isRequired
}

export default NavBar
