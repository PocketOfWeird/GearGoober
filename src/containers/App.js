import React from 'react'
import ViewContainer from './views'
import NavBarContainer from './NavBarContainer'
import BreadcrumbContainer from './BreadcrumbContainer'

const App = () => (
  <div>
    <BreadcrumbContainer />
    <ViewContainer />
    <NavBarContainer />
  </div>
)

export default App
