const express = require('express')
const config = require('../../.config/gearGooberConfig.js')
const setupSecurity = require('./security')
const setupEnvironment = require('./environment')
const setupRoutes = require('./router')


const setupApp = (store) => {
  let app = express()

  setupSecurity(app, config)

  setupEnvironment(app, config)

  // Static file setup
  app.use(express.static('public'))

  setupRoutes(app, store)

  return app
}

module.exports = setupApp
