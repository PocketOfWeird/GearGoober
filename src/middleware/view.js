import firebase from '../db'
import { updateUser, firebaseOnce, SET_CURRENT_VIEW, getCategories } from '../actions'
import { needsData, getDataAction } from '../helpers'


const view = store => next => action => {
  if (action.type === SET_CURRENT_VIEW) {

    const view = action.payload.current

    if (view[0] === 'register') {
      const tennant = view[1]
      store.dispatch(updateUser({ tennant }))
      store.dispatch(firebaseOnce(
        '/groups/' + tennant,
        { key: 'tennant', query: { key: 'current', value: true } }
      ))
    }

    if (view[0] === 'equipment') {
      store.dispatch(getCategories())
    }
  }

  return next(action)
}

export default view
