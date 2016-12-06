import { setCurrentView, CLEAR_URL } from '../actions'


const url = store => next => action => {
  if (action.type === 'INITIALIZE') {
    const url = window.location.href
    const afterHash = url.substr(url.indexOf('#') + 2)

    if (afterHash.substr(0,8) === 'register') {
      const tennant = afterHash.substr(afterHash.indexOf('/') + 1)
      store.dispatch(setCurrentView(['register', tennant]))
    }
  }
  if (action.type === CLEAR_URL) {
    // Remove '#' and anything after
    const url = window.location.href
    window.location.href = url.substr(0, url.indexOf('#'))
  }
  return next(action)
}

export default url
