import React from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from '../store/configureStore'
import App from './app'


// Create the redux store
export const store = configureStore()
store.dispatch({ type: 'INITIALIZE'})

// Build the root React Component
const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
)

export default Root
