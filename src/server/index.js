import configureStore from './store'
import { startServer, startSocketIo, mockSnapshop } from './helpers'
import { hydrateFromSnapshot } from './actions'


const store = configureStore()
const server = startServer(store)
export const io = startSocketIo(server, store)

store.dispatch(hydrateFromSnapshot(mockSnapshop))
