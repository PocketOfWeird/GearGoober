const configureStore = require('./store/configureStore')
const { startServer, mockSnapshop } = require('./helpers')
const { hydrateFromSnapshot } = require('./actions')


const store = configureStore()

store.subscribe(() => console.log(store.getState()))

store.dispatch(hydrateFromSnapshot(mockSnapshop))

startServer(store)
