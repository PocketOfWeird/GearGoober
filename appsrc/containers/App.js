import React from 'react'
import LoginContainer from './forms/LoginContainer'
import ViewsContainer from './shared/ViewsContainer'
import NavBarContainer from './shared/NavBarContainer'
import ErrorContainer from './shared/ErrorContainer'


const App = () => (
  <div>
    {true &&
      <LoginContainer />
    }
    {false &&
      <div>
        <ViewsContainer />
        <NavBarContainer />
      </div>
    }
    <ErrorContainer />
  </div>
)

export default App
