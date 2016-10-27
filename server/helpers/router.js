const authRoute = require('./routes/auth')


const setupRoutes = (app, store) => {

  // route to authenticate a user and get a token (POST /api/auth)
  app.post('/auth', authRoute(
    Object.assign(
      {},
      { users: store.getState().users },
      { lookupUsers: store.getState().lookup.users }
    ),
    store.dispatch,
    app.get('secret'),
    app.get('algorithm')
  ))

}

module.exports = setupRoutes
