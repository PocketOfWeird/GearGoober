const createStore = require('redux').createStore
const rootReducer = require('../reducers')


const configureStore = () => {
  return createStore(rootReducer)
}

module.exports = configureStore
