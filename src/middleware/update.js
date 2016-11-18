import { FIREBASE_UPDATE, firebaseOnce } from '../actions'
import firebase from '../db'


const update = store => next => action => {

  if (action.type === FIREBASE_UPDATE) {
    firebase.database().ref(action.path).set(action.values)
    .then(() => {
      if (action.data) {
        store.dispatch(firebaseOnce(
          action.path,
          action.data
        ))
      }
    })
    .catch(err => console.log(err))
  }

  return next(action)
}

export default update
