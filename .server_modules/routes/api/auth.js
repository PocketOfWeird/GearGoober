const jwt = require('jsonwebtoken')
const isEmail = require('validator/lib/isEmail')
const handleError = require('../../helpers/handleError')
let User = require('../../models/user')


const bad = res => res.status(403).send({
  success: false, message: 'Bad Username or Password'
})

const apiAuthRoute = (secret, algorithm) => (req, res) => {
  // validate email and password
  let email = req.body.email
  let password = req.body.password
  if (!isEmail(email)) return bad(res)
  if (typeof(password) !== 'string') return bad(res)

  console.log('in auth route');

  // find the user
  User.findOne({
      email: email
  }, function(err, user) {
    console.log('in finding user');
    console.log('error', err);
    if (err) return handleError(err, res);
    if (!user) {
      return bad(res)
    } else if (user) {

        // check if password matches
        if (user.password != req.body.password) {
            return bad(res)
        } else {
            // if user is found and password is correct
            // create a token
            var token = jwt.sign(user, secret, {
              algorithm: algorithm,
              expiresIn: 86400 // expires in 24 hours
            })

            // return the information including token as JSON
            return res.json({ data: [ token, user ]})
        }
    }
  })
}

module.exports = apiAuthRoute
