import { List } from 'immutable'
import { activateView } from '../actions'
export { listenToWindowEvent } from './globalEventListener'

export const dispatchActivateView = (dispatch) => {
  return (view) => {
    dispatch(activateView(List(view)))
  }
}
