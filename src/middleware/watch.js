import { horizon, authenticated } from '../db'
import { horizonState } from '../actions'


const watchHorizon = store => next => action => {

  if (action.type && action.type === 'INITIALIZE' && authenticated()) {

    horizon.currentUser().watch().subscribe(
      user => {
        store.dispatch(horizonState( { user } ))
      }
    )
  }

  return next(action)
}

export default watchHorizon
