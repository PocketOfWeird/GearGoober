import Firebase from 'firebase'
import config from './config'


export const firebase = Firebase.initializeApp(config)

export const authenticated = () => firebase.currentUser ? true : false

export const loginWith = provider => {
  horizon.authEndpoint(provider).subscribe(endpoint => {
    window.location.replace(endpoint)
  })
}
