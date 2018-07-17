

// middleware sits between the dispatching of an action, and the running of the reducer
const logger = store => next => (action) => {
  console.group(action.type)
  console.log('The action code: ', action)
  const result = next(action) // next() redux called store.dispatch(action) to dispatch the reducer
  console.log('The new state: ', store.getState())
  console.groupEnd()
  return result
}

export default logger
