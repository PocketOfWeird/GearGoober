import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginWith } from '../../db'
import { isLoading, isLoggedIn } from '../../selectors'
import LoginContainer from '../forms/LoginContainer'
import FullScreenLoader from './FullScreenLoader'
import ViewsContainer from './ViewsContainer'
import NavBarContainer from './NavBarContainer'
import Registration from '../forms/Registration'
import ErrorContainer from './ErrorContainer'


const App = ({ loggingIn, loggedIn }) => (
  <div>
    {loggingIn &&
      <FullScreenLoader />
    }
    {loggedIn ?
      <div>
        <ViewsContainer />
        <NavBarContainer />
      </div>
      : // if not logged in
      <LoginContainer />
    }
    <ErrorContainer />
  </div>
)

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  loggingIn: isLoading(state),
  loggedIn: isLoggedIn(state)
})


export default connect(mapStateToProps)(App)
