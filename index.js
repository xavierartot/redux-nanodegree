// library code
function createStore(reducer) {
  // The store should have four parts
  // 1 - state tree
  let state,
    listeners = []

  const getState = () => state // 2 Get the state.
  const subscribe = (listener) => { // 3 Listen to change on the state.
    // listener is a callback
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(e => e !== listener)
    }
  }
  // 4 updtate the state with DISPATCH function
  const dispatch = (action) => { // action = {...}
    state = reducer(state, action)
    listeners.forEach(listener => listener()) // execute the closure listener() in subscribe()
  }
  return {// mandatory return an object
    getState,
    subscribe,
    dispatch,
  }
}

const ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  ADD_GOAL = 'ADD_GOAL',
  REMOVE_GOAL = 'REMOVE_GOAL'
// action creator function are creating action(dispatcher)
function addToDoAction(todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}
function removeToDoAction(id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}
function toggleToDoAction(id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}
function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}
function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id,
  }
}

// App
// reducer todo
function todos(state = [], action) {
  switch (action.type) {
  case ADD_TODO:
    // return state.concat([action.todo]) // action.todo === {...} un object
    return [...state, action.todo]
  case REMOVE_TODO:
    return state.filter(todo => todo.id !== action.id)
  case TOGGLE_TODO:
    return state.map(todo => (todo.id === action.id ? { ...todo, complete: !todo.complete } : todo))
    // Object.Assign({}, todo, complete: !todo.complete))
  default: return state
  }
}
// reducer goals
function goals(state = [], action) {
  switch (action.type) {
  case ADD_GOAL:
    return state.concat([action.goal])
  case REMOVE_GOAL:
    return state.filter(goal => goal.id !== action.id)
  default: return state
  }
}

function app(state = {}, action) {
  return {
    todos: todos(state.todos, action), // {...}
    goals: goals(state.goals, action), // {...}
  }
}
const store = createStore(app)

store.subscribe(() => {
  console.log('The new state is: ', store.getState())
})

// const unSubscribe = store.subscribe(() => {
// console.log('T...s: ', store.getState())
// })
// unSubscribe()// execute the return with the fn anonyme

// dispatch handle action object
store.dispatch(addGoalAction({
  id: 0,
  name: 'work everyday',
}))
store.dispatch(addGoalAction({
  id: 1,
  name: 'work ...',
}))
store.dispatch(addGoalAction({
  id: 4,
  name: 'work ...',
}))

store.dispatch(removeGoalAction(1))

store.dispatch(addToDoAction({
  id: 1,
  name: 'Learn Redux',
  complete: false,
}))

store.dispatch(addToDoAction({
  id: 3,
  name: 'Learn Redux',
  complete: false,
}))

store.dispatch(removeToDoAction(1))
store.dispatch(toggleToDoAction(2))


// Summary
// Up until this point, we've been building out the createStore() function, piece by piece. In this section, we put all of those pieces together to create a fully functioning project. Then we took that code and demoed it working in the console. We showed that subscribing to the store returned a function we could use to unsubscribe later. We also dispatched an action and saw how the state was updated as a result.
