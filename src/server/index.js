import configureStore from './store/configureStore'
import { startServer, mockSnapshop } from './helpers'
import { hydrateFromSnapshot } from './actions'
//import undb from './undb'

const store = configureStore()

store.subscribe(() => console.log(store.getState())) // eslint-disable-line no-console

store.dispatch(hydrateFromSnapshot(mockSnapshop))

startServer(store)
