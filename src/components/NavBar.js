import React, { PropTypes } from 'react'
import FaVideoCamera from 'react-icons/lib/fa/video-camera'
import FaCalender from 'react-icons/lib/fa/calendar'
import FaGroup from 'react-icons/lib/fa/group'
import FaCog from 'react-icons/lib/fa/cog'

// Styles
const iconStyles = {
  width: '1.5rem',
  height: '1.5rem',
  color: '#1C8ADB'
}

// Component
const NavBar = ({ navs }) => (
  <footer className={'navBar'}>
    <div className={'navContainer'}>
      {navs.map(nav =>
          <div
            className={nav.active ? 'navGroup active' : 'navGroup'}
            onClick={e => e.preventDefault()}>
            <span>
              <i className={'icon-' + nav.icon} />
              <br />
              {nav.name}
            </span>
          </div>
        )
      }
    </div>
  </footer>
)

NavBar.propTypes = {
  navs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export default NavBar
