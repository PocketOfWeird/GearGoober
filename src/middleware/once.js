import firebase from '../db'
import { FIREBASE_ONCE, firebaseState } from '../actions'
import { isEmptyObject } from '../helpers'


const once = store => next => action => {

  if (action.type === FIREBASE_ONCE) {

    let ref = firebase.database().ref(action.path + '/' + action.tennant)

    if (!isEmptyObject(action.query)) {
      ref = ref.orderByChild(action.query.key).equalTo(action.query.value)
    }

    ref.once('value').then(snapshot => {
      store.dispatch(firebaseState({ [action.key]: snapshot.exportVal() }))
    })
  }
  return next(action)
}

export default once
