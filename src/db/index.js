import Horizon from '@horizon/client'
import config from './config'


export const horizon = new Horizon(config)

export const authenticated = () => horizon.hasAuthToken()

export const loginWith = provider => {
  horizon.authEndpoint(provider).subscribe(endpoint => {
    window.location.replace(endpoint)
  })
}
