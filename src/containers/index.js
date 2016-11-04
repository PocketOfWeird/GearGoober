import React from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from '../store/configureStore'
import { authenticated } from '../db'
import App from './App'


// Create the redux store
let store = configureStore()
store.dispatch({ type: 'INITIALIZE'})

// Build the root React Component
const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App loggedIn={authenticated()} />
    </MuiThemeProvider>
  </Provider>
)

export default Root
