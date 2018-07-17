import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
} from '../actions/todos'


class Todos extends React.Component {
  addItem = (event) => {
    event.preventDefault()
    if (this.varInput.value && this.varInput.value !== '') {
      this.props.dispatch(handleAddTodo(
        this.varInput.value,
        () => this.varInput.value = '',
      ))
    } else {
      alert('can\'t be empty')
    }
  }
  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))
  }
  toggleItem = (id) => {
    this.props.dispatch(handleToggleTodo(id))
  }
  render() {
    return (
      <div className="todos">
        <h2>Todos</h2>
        <input
          type="text"
          placholder="ddd"
          ref={i => this.varInput = i}
        />
        <button onClick={this.addItem}>Add</button>
        <List
          toggle={this.toggleItem}
          items={this.props.todos}
          remove={this.removeItem}
        />
      </div>
    )
  }
}

// //signature: connect(state)(component)
// const ConnectedTodos = ReactRedux.connect((state) => ({
// todos: state.todos
// }))(Todos)
// signature: connect(state)(component)
export default connect(state => ({
  todos: state.todos,
}))(Todos)
