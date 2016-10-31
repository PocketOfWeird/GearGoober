import http from 'http'
import setupApp from './app'
import setupSocketIo from './socket'


export const startServer = (store) => {
  const app = setupApp(store)

  const server = http.createServer(app)

  setupSocketIo(store, server, app)

  server.listen(app.get('port'),
  () => console.log('Http server listening on port ' + app.get('port'))) // eslint-disable-line no-console
}
