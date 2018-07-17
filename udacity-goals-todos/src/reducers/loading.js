import { RECEIVE_DATA } from '../actions/shared'

// reducer loading, we add a booleen loading to the state
export default function loading(state = true, action) {
  switch (action.type) {
  case RECEIVE_DATA: return false
  default: return state
  }
}
