import { expect } from 'chai'
import configureStore from '../server/store/configureStore'
import { hash, randomId, isSame, startServer, mockSnapshop } from '../server/helpers'
import { hydrateFromSnapshot } from '../server/actions'


describe('server', () => {

  it('has a Redux store configured with the correct reducer', () => {
    const store = configureStore()
    expect(store.getState()).to.be.a('object')

    store.dispatch(hydrateFromSnapshot(mockSnapshop))

    expect(store.getState()).to.equal(mockSnapshop)
  })

  const userEmail = 'bob@demo.edu'
  const userId = mockSnapshop.lookup.users[userEmail]
  const retrievedUser = mockSnapshop.users[userId]

  it('can lookup users', () => {
    expect(retrievedUser.email)
      .to.equal(userEmail)
  })

  it('can check passwords', () => {
    expect(isSame('boogerface', retrievedUser.password))
      .to.equal(true)
  })


})
