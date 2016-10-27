const { HYDRATE_FROM_SNAPSHOT } = require('../actions')


const reducer = (state = {}, action) => {
  switch (action.type) {
    case HYDRATE_FROM_SNAPSHOT:
      return action.payload
    default:
      return state
  }
}

module.exports = reducer
