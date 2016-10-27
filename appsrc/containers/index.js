import React from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from '../store/configureStore'
import App from './App'


// Create the redux store
let store = configureStore()

// Build the root React Component
const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
)

export default Root
