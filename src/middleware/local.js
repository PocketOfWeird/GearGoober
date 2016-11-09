if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage
  var localStorage = new LocalStorage('./scratch')
}

const localStore = store => next => action => {
  let result = next(action)
  localStorage.setItem('appstate', JSON.stringify(store.getState()))
  return result
}

export default localStore

export const hydrateState = () => {
  return JSON.parse(localStorage.getItem('appstate'))
}
