import React from 'react'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from '../store/configureStore'
import App from './App'


// Create the redux store
let store = configureStore()

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

// Build the root React Component
const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App history={history} />
    </MuiThemeProvider>
  </Provider>
)

export default Root
