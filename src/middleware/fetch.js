import { horizon, authenticated } from '../db'
import { horizonState, HORIZON_FETCH } from '../actions'


const fetchHorizon = store => next => action => {

  if (action.type && action.type === HORIZON_FETCH && authenticated()) {

    horizon(action.meta.collection)
          .findAll(action.meta.query)
          .fetch()
          .subscribe(
            state => store.dispatch(horizonState({
              [action.meta.collection]: state
            }))
          )

  }

  return next(action)
}

export default fetchHorizon
