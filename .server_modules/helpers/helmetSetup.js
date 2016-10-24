const helmet = require('helmet')


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

module.exports = helmetSetup
