import Firebase from 'firebase'
import config from './config'
import { firebaseState } from '../actions'
import { store } from '../containers'


const firebase = Firebase.initializeApp(config)
export default firebase

/* ============================================================================
  AUTHENTICATION FUNCTIONS
=============================================================================*/

const providers = {
  'github': new Firebase.auth.GithubAuthProvider()
}

export const loginWith = provider => {
  firebase.auth().signInWithRedirect(providers[provider])
}

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    store.dispatch(firebaseState({
      providerToken: result.credential.accessToken,
      user: result.user
    }))
  }
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message
    // The email of the user's account used.
    var email = error.email
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential
    // ...
})