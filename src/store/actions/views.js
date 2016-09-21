import Immutable from 'immutable'
export const REQUEST_VIEW = 'REQUEST_VIEW'

const requestView = (view) => ({
  type: REQUEST_VIEW,
  view
})

const viewsHas = (state, view) => {
  const views = state.get('views')
  return views.hasIn(view)
}

export const activateView = (view) => {
  return (dispatch, getState) => {
    if (viewsHas(getState(), view)) {
      return dispatch(requestView(view))
    }
  }
}
