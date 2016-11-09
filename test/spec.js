import chai, { expect } from 'chai'
import configureStore from '../src/store/configureStore'

describe('app', () => {

  const store = configureStore()

  it('has a redux store', () => {

    store.dispatch({type: 'INITIALIZE'})
    expect(store.getState()).to.be.a('object')

  })
})
