import checker from './checker'
import logger from './logger'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

// signature: applyMiddleware(...middlewares)
export default applyMiddleware(
  thunk,
  checker,
  logger,
)
