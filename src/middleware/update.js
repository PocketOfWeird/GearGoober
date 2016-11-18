import { FIREBASE_UPDATE, updateComplete, firebaseOnce, raiseNote, raiseError } from '../actions'
import firebase from '../db'


const update = store => next => action => {

  if (action.type === FIREBASE_UPDATE) {
    firebase.database().ref(action.path).set(action.values)
    .then(() => {
      store.dispatch(updateComplete())
      if (action.note) {
        store.dispatch(raiseNote(action.note))
      }
      if (action.data) {
        store.dispatch(firebaseOnce(
          action.path,
          action.data
        ))
      }
    })
    .catch(err => {
      store.dispatch(raiseError(err))
    })
  }

  return next(action)
}

export default update
