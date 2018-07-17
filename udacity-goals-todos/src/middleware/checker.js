import { ADD_TODO } from '../actions/todos'
import { ADD_GOAL } from '../actions/goals'

// middleware sits between the dispatching of an action, and the running of the reducer
// middleware function es6
const checker = store => next => (action) => {
  if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
    return alert('Nope, That\'s a bad idea')
  }
  if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
    return alert('Nope, That\'s a bad idea')
  }
  // next manage for a different middleWare or dispatch method
  return next(action) // next replace store.dispatch( method )
}

export default checker
