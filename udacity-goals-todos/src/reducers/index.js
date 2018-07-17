import { combineReducers } from 'redux'

import todos from './todos'
import loading from './loading'
import goals from './goals'

// signature
// const store = Redux.createStore( <reducer-function>, <middleware-functions> )
export default combineReducers({
  todos, // function reducers
  goals,
  loading,
})
