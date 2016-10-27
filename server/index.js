const configureStore = require('./store/configureStore')
const { startServer, mockSnapshop } = require('./helpers')
const { hydrateFromSnapshot } = require('./actions')


const store = configureStore()

store.dispatch(hydrateFromSnapshot(mockSnapshop))

startServer(store)
