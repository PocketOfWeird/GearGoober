const transform = (view) => {
  // recursive case
  if (view.size > 1) {
    return '/' + view.first() + transform(view.rest())
  }
  // special case
  else if (view.size === 0) {
    return '/'
  }
  // base case
  return '/' + view.first() + '/'
}

export const router = store => next => action => {
  let result = next(action)
  const appUrlString = transform(store.getState().get('activeView'))
  window.location.hash = appUrlString
  return result
}
