const fs = require('fs')
const path = require('path')
const morgan = require('morgan')


const logStream = fs.createWriteStream(path.join(__dirname, '.log'), {flags: 'a'})

const loggingSetup = env => {
  if (env === 'development') {
    return morgan('dev')
  } else if (env === 'production') {
    return morgan('combined', {
      skip: (req, res) => res.statusCode < 400,
      stream: logStream
    })
  }
}

module.exports = loggingSetup
