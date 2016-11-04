import Firebase from 'firebase'
import config from './config'

const firebase = Firebase.initializeApp(config)
export default firebase

// ============================================================================
// AUTHENTICATION
// ============================================================================
export const authenticated = () => firebase.currentUser ? true : false

const providers = {
  'github': new Firebase.auth.GithubAuthProvider()
}

export const loginWith = provider => {
  firebase.auth().signInWithRedirect(providers[provider])
}

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Provider Access Token. You can use it to access the Provider's API.
    var token = result.credential.accessToken
    console.log('token', token)
    // ...
  }
  // The signed-in user info.
  var user = result.user
  console.log('user', user)
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
