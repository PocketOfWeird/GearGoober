import firebase from '../db'
import { firebaseOnce, SET_CURRENT_VIEW } from '../actions'
import { needsData, getDataAction } from '../helpers'


const view = store => next => action => {
  if (action.type === SET_CURRENT_VIEW) {

    const view = action.payload.current

    if (view[0] === 'register') {
      store.dispatch(firebaseOnce('/groups', 'groups', view[1],
        { key: 'current', value: true }
      ))
    }
  }

  return next(action)
}

export default view
