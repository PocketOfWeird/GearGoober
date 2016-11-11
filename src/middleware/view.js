import firebase from '../db'
import { setTennant, firebaseOnce, SET_CURRENT_VIEW } from '../actions'
import { needsData, getDataAction } from '../helpers'


const view = store => next => action => {
  if (action.type === SET_CURRENT_VIEW) {

    const view = action.payload.current

    if (view[0] === 'register') {
      const tennant = view[1]
      store.dispatch(setTennant(tennant))
      store.dispatch(firebaseOnce('/groups', 'groups', tennant,
        { key: 'current', value: true }
      ))
    }
  }

  return next(action)
}

export default view
