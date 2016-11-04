import { createSelector } from 'reselect'


const firstViewSelector = state => state.view.current[0]

export const firstViewToIndex = createSelector(
  firstViewSelector,
  firstView => {
    let index
    switch (firstView) {
      case 'equipment':
        index = 0
        break
      case 'reserve':
        index = 1
        break
      case 'groups':
        index = 2
        break
      case 'settings':
        index = 3
        break
      default:
        index = 0
        break
    }
    return index
  }
)
