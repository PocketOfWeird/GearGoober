import React from 'react'
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import SearchContainer from './shared/SearchContainer'


const RouterConfig = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={SearchContainer}>

    </Route>
  </Router>
)

export default RouterConfig
