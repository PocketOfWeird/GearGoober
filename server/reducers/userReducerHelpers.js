const addLoggedInUser = (state, action) => {
  return Object.assign({}, state,
    {
      loggedInUsers: Object.assign({},
        state.loggedInUsers,
        { [action.payload]:true }
      )
    }
  )
}

module.exports = {
  addLoggedInUser
}
