import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

// action creator function are use in store.dispatcher(...)
function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal, // obj
  }
}
function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id, // obj
  }
}
// thunkify add goal, action creator
// action creator with thunk library
export function handleAddGoal(name, cb) {
  return dispatch => API.saveGoal(name)
    .then((name) => {
      dispatch(addGoal(name))
      cb()// reset the input
    })
    .catch(() => {
      alert('Ooop\'s an error occured with the server')
    })
}
// action creator with thunk library
export function handleRemoveGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoal(goal.id)) // update the UI

    // optimistic update
    return API.deleteGoal(goal.id) // update the server
      .catch(() => {
        dispatch(addGoal(goal)) // if an error occur add back in the UI the update
        alert('Ooop\'s an error occured with the server', console.log(goal))// alert the mistake to the UI
      })
  }
}
