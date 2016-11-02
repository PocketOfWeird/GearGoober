import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
import { isSame, handleHttpError } from '../helpers'
import config from '../../.config/gearGooberConfig.js'
import { getSpecificUser } from '../selectors'


const bad = (res, message = 'Bad Email or Password') => handleHttpError(res, message, 401)

const authRoute = (store) => (req, res) => {
  try {
    // Validate email and password
    let email = req.body.email
    let password = req.body.password
    if (!isEmail(email)) return bad(res)
    if (typeof(password) !== 'string') return bad(res)

    const state = store.getState()
    const dispatch = store.dispatch

    // Lookup user
    const { id, tennant } = state.lookup.users[email]
    if(!id || !tennant) return bad(res)
    const user = getSpecificUser(state.users[tennant], id)
    if (!user) return bad(res)
    if(!user.active) return bad(res, 'Your account has been deactivated')

    // Check password
    if(!isSame(password, user.password)) return bad(res)

    // Make token
    const token = jwt.sign(user, config.secret, {
      algorithm: config.algorithm,
      expiresIn: 86400 // expires in 24 hours
    })

    dispatch({
      type: 'USER_LOGGED_IN',
      payload: id
    })

    return res.json({ data: [ token, user ]})
  } catch (e) {
    return handleHttpError(res, e, 500)
  }
}

export default authRoute
