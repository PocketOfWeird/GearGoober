import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { List } from 'immutable'
import configureStore from '../store/configureStore'
import { activateView } from '../store/actions'
import App from './App'


const store = configureStore()

let firstView = List(['equipment','search'])
store.dispatch(activateView(firstView))


const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root
