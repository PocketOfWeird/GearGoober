import Immutable from 'immutable'
import { REQUEST_VIEW } from '../actions/'

let defaultState = Immutable.fromJS({
  equipment: {
    _props: {
      name: 'Equipment',
      icon: 'videocam',
      order: 1
    }
  },
  reservations: {
    _props: {
      name: 'Reserve',
      icon: 'calendar',
      order: 2
    }
  },
  groups: {
    _props: {
      name: 'Groups',
      icon: 'users',
      order: 3
    }
  },
  settings: {
    _props: {
      name: 'Settings',
      icon: 'cog',
      order: 4
    }
  },
  currentView: Immutable.List()
})

const views = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_VIEW:
      return state.setIn(action.view.push('_props','active'), true)
                  .setIn(['currentView'], action.view)
    default:
      return state
  }
}

export default views
