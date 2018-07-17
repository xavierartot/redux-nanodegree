import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../actions/todos'
import { RECEIVE_DATA } from '../actions/shared'

// App
// function reducer todo
export default function todos(state = [], action) {
  switch (action.type) {
  case ADD_TODO:
    return [...state, action.todo] // ex with concat, add action.todo in array: return state.concat([action.todo])
  case REMOVE_TODO:
    return state.filter(todo => todo.id !== action.id)
  case TOGGLE_TODO:
    return state.map(todo => (todo.id === action.id ? { ...todo, complete: !todo.complete } : todo))
    // ex with Assign: Object.Assign({}, todo, complete: !todo.complete))
  case RECEIVE_DATA:
    return action.todos // load data todos, state[] is an empty array
  default: return state
  }
}
