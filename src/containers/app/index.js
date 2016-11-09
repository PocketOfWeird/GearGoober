import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginWith } from '../../db'
import { isLoading, isLoggedIn, isRegistering } from '../../selectors'
import LoginContainer from '../forms/LoginContainer'
import FullScreenLoader from '../components/FullScreenLoader'
import ViewsContainer from './ViewsContainer'
import NavBarContainer from './NavBarContainer'
import Registration from '../forms/Registration'
import ErrorContainer from './ErrorContainer'


const App = ({ loggingIn, loggedIn, registering }) => (
  <div>
    {loggingIn &&
      <FullScreenLoader />
    }
    {loggedIn ?
      <div>
        <ViewsContainer />
        <NavBarContainer />
      </div>
      : registering ?
        <Registration />
      :
      // if not logged in and registered
      <LoginContainer />
    }
    <ErrorContainer />
  </div>
)

App.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  registering: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  loggingIn: isLoading(state),
  loggedIn: isLoggedIn(state),
  registering: isRegistering(state),
})


export default connect(mapStateToProps)(App)
