import { FIREBASE_UPDATE } from '../actions'
import firebase from '../db'


const update = store => next => action => {

  if (action.type === FIREBASE_UPDATE) {
    firebase.database().ref(action.path).set(action.payload)
  }

  return next(action)
}

export default update
