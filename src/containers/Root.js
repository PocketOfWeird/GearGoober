import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import { configureRouter } from '../store/middlewares'
import App from './App'


const store = configureStore()

configureRouter(store)

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root
