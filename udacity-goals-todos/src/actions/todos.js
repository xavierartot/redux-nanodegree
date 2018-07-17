import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addToDo(todo) {
  return {
    type: ADD_TODO,
    todo, // obj
  }
}
function removeToDo(id) {
  return {
    type: REMOVE_TODO,
    id, // obj
  }
}
function toggleToDo(id) {
  return {
    type: TOGGLE_TODO,
    id, // obj
  }
}

// action with logic encapsuled in a function and Thunk
// alias : thunk action creator
export function handleDeleteTodo(todo) {
  return (dispatch) => {
    // optimistic update: we have always some delay between the database and the UI
    // optimistically deleting an item in UI
    dispatch(removeToDo(todo.id))
    // delete in the API and databse forever
    return API.deleteTodo(todo.id)
      .catch(() => {
        // if an error occur with the promise, add the item back
        dispatch(addToDo(todo))
        // alert the user
        alert('An error occurred. Try again.')
      })
  }
}


// action creator with thunk library
export function handleAddTodo(name, cb) {
  return dispatch => API.saveTodo(name)
    .then((name) => {
      dispatch(addToDo(name))
      cb()
    })
    .catch((obj) => {
      alert('Ooop\'s an error occured with the server')
      console.log(obj)
    })
}
// action creator with thunk library
export function handleToggleTodo(id) {
  return (dispatch) => {
    dispatch(toggleToDo(id))
    return API.saveTodoToggle(id) // delete in the API forever
      .catch(() => {
        // if an error occur with the promise, add the item back
        dispatch(toggleToDo(id))
        // alert the user
        alert('Ooop\'s an error occured. Try again', console.log(id))
      })
  }
}
