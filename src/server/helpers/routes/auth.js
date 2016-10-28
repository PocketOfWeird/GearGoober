import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
import { isSame } from '../hashers'
import handleHttpError from '../error'

const bad = (res) => handleHttpError(res, 'Bad Email or Password', 401)

const authRoute = (userState, dispatch, secret, algorithm) => (req, res) => {
  // Validate email and password
  let email = req.body.email
  let password = req.body.password
  if (!isEmail(email)) return bad(res)
  if (typeof(password) !== 'string') return bad(res)

  // Lookup user
  const userId = userState.lookupUsers[email]
  if(!userId) return bad(res)
  const user = userState.users[userId]
  // Check password
  if(!isSame(password, user.password)) return bad(res)

  // Make token
  const token = jwt.sign(user, secret, {
    algorithm,
    expiresIn: 86400 // expires in 24 hours
  })

  dispatch({
    type: 'USER_LOGGED_IN',
    payload: userId
  })

  return res.json({ data: [ token, user ]})
}

export default authRoute
