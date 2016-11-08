import firebase from '../db'
import { FIREBASE_ONCE, firebaseState } from '../actions'


const once = store => next => action => {
  if (action.type === FIREBASE_ONCE) {
    firebase.database().ref(action.path).once('value').then(snapshot => {
      store.dispatch(firebaseState({ [action.key]: snapshot.exportVal }))
    })
  }
  return next(action)
}
