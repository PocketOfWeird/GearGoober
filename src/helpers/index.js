export * from './form'
export * from './data'


// General helpers
export const isEmptyObject = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

export const randomId = () => {
  return Math.random().toString(36).substr(2,28)
}
