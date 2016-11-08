import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginWith } from '../db'
import { isLoggedIn } from '../selectors'
import LoginWith from '../components/forms/LoginWith'
import ViewsContainer from './shared/ViewsContainer'
import NavBarContainer from './shared/NavBarContainer'
import Registration from './forms/Registration'
import ErrorContainer from './shared/ErrorContainer'


const App = ({ loggedIn }) => (
  <div>
    {loggedIn ?
      <div>
        <ViewsContainer />
        <NavBarContainer />
      </div>
      : // if not logged in
      <LoginWith
        handleTouchTap={provider => () => loginWith(provider)}
      />
    }
    <ErrorContainer />
  </div>
)

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  loggedIn: isLoggedIn(state)
})


export default connect(mapStateToProps)(App)