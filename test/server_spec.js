import { expect } from 'chai'
import configureStore from '../server/store/configureStore'
import { hash, randomId, startServer, mockSnapshop } from '../server/helpers'
import { hydrateFromSnapshot } from '../server/actions'


describe('server', () => {

  it('has a Redux store configured with the correct reducer', () => {
    const store = configureStore()
    expect(store.getState()).to.be.a('object')

    store.dispatch(hydrateFromSnapshot(mockSnapshop))

    expect(store.getState()).to.equal(mockSnapshop)
  })

  it('creates a Socket server with the correct events', () => {


  })

})
