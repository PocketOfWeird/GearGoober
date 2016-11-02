import authRoute from '../routes/auth'
import dataRoute from '../routes/data'


const setupRoutes = (app, store) => {

  // route to authenticate a user and get a token (POST /api/auth)
  app.post('/auth', authRoute(store))
  app.post('/data', dataRoute(store))
}

export default setupRoutes
