import chai, { expect } from 'chai'
import { createStore } from 'redux'

describe('app', () => {

  const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'INITIALIZE':
        return { a: 1 }
      default:
        return state
    }
  }

  const store = createStore(reducer)

  it('has a redux store', () => {

    store.dispatch({type: 'INITIALIZE'})
    expect(store.getState()).to.be.a('object')

  })
})
