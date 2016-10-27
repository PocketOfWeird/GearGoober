const bcrypt = require('bcrypt')


const SALT = 8

const hash = (password) => {
  return bcrypt.hashSync(password, SALT)
}

const isSame = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}

const randomId = () => {
  return Math.random().toString(36).substr(2,12)
}

module.exports = {
  hash, isSame, randomId
}
