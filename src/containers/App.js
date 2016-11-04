import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { isRegistered } from '../selectors'
import { loginWith } from '../db'
import LoginWith from '../components/forms/LoginWith'
import ViewsContainer from './shared/ViewsContainer'
import NavBarContainer from './shared/NavBarContainer'
import Registration from './forms/Registration'
import ErrorContainer from './shared/ErrorContainer'


const App = ({ loggedIn, registered }) => (
  <div>
    {!loggedIn &&
      <LoginWith
        handleTouchTap={provider => () => loginWith(provider)}
      />
    }
    {loggedIn && !registered &&
      <Registration />
    }
    {loggedIn && registered &&
      <div>
        <ViewsContainer />
        <NavBarContainer />
      </div>
    }
    <ErrorContainer />
  </div>
)

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  registered: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  registered: isRegistered(state)
})

export default connect(mapStateToProps)(App)
