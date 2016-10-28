import helmet from 'helmet'
import contentLength from 'express-content-length-validator'


const helmetSetup = host => {
  return helmet({
    frameguard: {
      action: 'deny'
    },
    hidePoweredBy: {
      setTo: 'RUBY 2.3.1'
    }
  })
}

/*
 * TODO: add the following to configs to helmet
 *  contentSecurityPolicy
 *  hsts
 *  referrerPolicy
 *  hpkp
*/

const setupSecurity = (app, config) => {
  app.set('host', config.host)
  app.use(helmetSetup(app.get('host')))
  app.use(require('body-parser').json())
  app.use(contentLength.validateMax())
  app.set('secret', config.secret)
  app.set('algorithm', config.algorithm)
  // Security: TODO: Add express-enforces-ssl
}

export default setupSecurity
