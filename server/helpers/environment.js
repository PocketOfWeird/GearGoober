const setupEnvironment = (app, config) => {
  app.set('environment', config.environment)
  const env = process.env.NODE_ENV = app.get('environment')
  const runningAs = process.argv[2] // commandline args 'production' or 'demo'
  app.set('port', config.port)
  if (runningAs === 'demo') {
    app.set('port', config.demoPort)
  }
}

module.exports = setupEnvironment
