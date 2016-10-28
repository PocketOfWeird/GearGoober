import express from 'express'
import config from '../../.config/gearGooberConfig.js'
import setupSecurity from './security'
import setupEnvironment from './environment'
import setupRoutes from './router'


const setupApp = (store) => {
  let app = express()

  setupSecurity(app, config)

  setupEnvironment(app, config)

  // Static file setup
  app.use(express.static('public'))

  setupRoutes(app, store)

  return app
}

export default setupApp
