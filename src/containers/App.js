import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import SimpleLogin from './SimpleLogin'
import BreadcrumbContainer from './BreadcrumbContainer'
import ViewContainer from './views'
import NavBar from '../components/NavBar'


const App = ({ activeParentView, loggedIn }) => (
  <div>
    {!loggedIn &&
      <SimpleLogin />
    }
    {loggedIn &&
      <div>
        <BreadcrumbContainer />
        <ViewContainer />
        <NavBar activeParentView={activeParentView} />
      </div>
    }
  </div>
)

App.propTypes = {
  activeParentView: PropTypes.string,
  loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  activeParentView: state.hasIn(['views', 'activeView']) ? state.getIn(['views', 'activeView']).first() : '',
  loggedIn: state.getIn(['auth', 'token']) ? true : false
})

export default connect(mapStateToProps)(App)
