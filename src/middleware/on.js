import firebase from '../db'
import { updateUser } from '../actions'


const on = store => next => action => {
  if (action.type === 'INITIALIZE') {
    // Setup Observers
    // User
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.database().ref('/users/' + user.uid)
        .on('value', snapshot => {
          store.dispatch(updateUser(snapshot.exportVal()))
        })
      }
    })
  }
  return next(action)
}

export default on
