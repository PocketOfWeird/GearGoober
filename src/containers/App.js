import React from 'react'
import NavBar from '../components/NavBar'

// TODO: get navs from state
const navs = [
  { name: 'Equipment', icon: 'videocam', active: false },
  { name: 'Reserve', icon: 'calendar', active: true },
  { name: 'Groups', icon: 'users', active: false },
  { name: 'Equipment', icon: 'cog', active: false }
]

const App = () => (
  <div>
    <NavBar navs={navs} />
  </div>
)

export default App
