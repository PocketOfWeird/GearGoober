import secrets from '../../.config/secrets'


// NOTE: firebase client config
const config = {
    apiKey: secrets.apiKey,
    authDomain: secrets.authDomain,
    databaseURL: secrets.databaseURL,
    storageBucket: secrets.storageBucket
}

export default config
