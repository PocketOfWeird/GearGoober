import firebase from '../db'
import { FIREBASE_ONCE, firebaseState, raiseError } from '../actions'


const once = store => next => action => {

  if (action.type === FIREBASE_ONCE) {

    let ref = firebase.database().ref(action.path)

    if (action.data.query) {
      const { query } = action.data
      ref = ref.orderByChild(query.key).equalTo(query.value)
    }

    ref.once('value')
    .then(snapshot => {
      store.dispatch(firebaseState({ [action.data.key]: snapshot.val() }))
    })
    .catch(err => {
      store.dispatch(raiseError(err))
    })
  }
  return next(action)
}

export default once
