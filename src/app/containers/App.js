import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginContainer from './forms/LoginContainer'
import ViewsContainer from './shared/ViewsContainer'
import NavBarContainer from './shared/NavBarContainer'
import ErrorContainer from './shared/ErrorContainer'


const App = ({ loggedIn }) => (
  <div>
    {!loggedIn &&
      <LoginContainer />
    }
    {loggedIn &&
      <div>
        <ViewsContainer />
        <NavBarContainer />
      </div>
    }
    <ErrorContainer />
  </div>
)

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  loggedIn: state.token ? true : false
})

export default connect(mapStateToProps)(App)
