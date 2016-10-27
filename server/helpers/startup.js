const http = require('http')
const setupApp = require('./app')
//const setupDB = require('./db')
const setupSocketIo = require('./socket')


const startServer = (store) => {
  const app = setupApp(store)

  const server = http.createServer(app)

  setupSocketIo(server, app)

  server.listen(app.get('port'),
  () => console.log('Http server listening on port ' + app.get('port')))
}

module.exports = startServer
