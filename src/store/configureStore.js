import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({collapsed: true})
  middlewares.push(logger)
}

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
)

export default store
