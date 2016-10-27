const { HYDRATE_FROM_SNAPSHOT } = require('../actions')
const { addLoggedInUser } = require('./userReducerHelpers')


const reducer = (state = {}, action) => {
  switch (action.type) {
    case HYDRATE_FROM_SNAPSHOT:
      return action.payload
    case 'USER_LOGGED_IN':
      return addLoggedInUser(state, action)
    default:
      return state
  }
}

module.exports = reducer
