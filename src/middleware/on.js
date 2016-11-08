import firebase from '../db'
import { updateUser } from '../actions'


const on = store => next => action => {
  if (action.type === 'INITIALIZE') {
    // Setup Observers
    // User
    firebase.auth().onAuthStateChanged(user => {
        if (user) store.dispatch(updateUser(user))
    })
  }
  return next(action)
}

export default on
