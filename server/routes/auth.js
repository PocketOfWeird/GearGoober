const jwt = require('jsonwebtoken')
const isEmail = require('validator/lib/isEmail')
const handleError = require('../helpers/error')


const bad = res => res.status(403).send({
  success: false, message: 'Bad Username or Password'
})

const authRoute = (userState, secret, algorithm) => (req, res) => {
  // validate email and password
  let email = req.body.email
  let password = req.body.password
  if (!isEmail(email)) return bad(res)
  if (typeof(password) !== 'string') return bad(res)
  console.log(userState)
  return handleError(res, 'testing', 500)
}

module.exports = authRoute
