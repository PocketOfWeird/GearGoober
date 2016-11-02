import { handleHttpError } from '../helpers'

const bad = res => handleHttpError(res, 'Invalid request', 400)

const dataRoute = store => (req, res) => {
    try {
      // TODO: validate action object
      if (!req.body.action) return bad(res)
      let action = req.body.action
      action.meta.user = req.decoded
      store.dispatch(req.body.action)
      return res.json({ data: { success: true }})
    } catch (e) {
      console.log('/data request error', e)
      return handleHttpError(res, e, 500)
    }
}

export default dataRoute
