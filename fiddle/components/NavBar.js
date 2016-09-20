import React from 'react'
import FaVideoCamera from 'react-icons/lib/fa/video-camera'
import FaCalender from 'react-icons/lib/fa/calendar'
import FaGroup from 'react-icons/lib/fa/group'
import FaCog from 'react-icons/lib/fa/cog'

// Styles
const ulStyles = {
  listStyle: 'none',
  textAlign: 'center'

}
const liStyles = {
  
}
const aStyles = {
  textDecoration: 'none',
  color: 'black'
}
const iconStyles = {
  width: '36px',
  height: '36px'
}

// Component
const NavBar = () => (
  <ul style={ulStyles}>
    <li style={liStyles}>
      <a href="#" style={aStyles}
        onClick={e => {e.preventDefault()}}
      > 
        <FaVideoCamera style={iconStyles} />
        <br />
        Equipment
      </a>
    </li>
    <li style={liStyles}>
      <a href="#" style={aStyles}
        onClick={e => {e.preventDefault()}}
      > 
        <FaCalender style={iconStyles} />
        <br />
        Reservations
      </a>
    </li>
    <li style={liStyles}>
      <a href="#" style={aStyles}
        onClick={e => {e.preventDefault()}}
      > 
        <FaGroup style={iconStyles} />
        <br />
        Groups
      </a>
    </li>
    <li style={liStyles}>
      <a href="#" style={aStyles}
        onClick={e => {e.preventDefault()}}
      > 
        <FaCog style={iconStyles} />
        <br />
        Settings
      </a>
    </li>
  </ul>
)

export default NavBar