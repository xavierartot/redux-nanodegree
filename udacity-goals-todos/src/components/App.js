import React, { Component } from 'react'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { connect } from 'react-redux'
import { handleInitialDatas } from '../actions/shared'


// App is a container component - https://medium.com/@learnreact/container-components-c0e67432e005
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialDatas())
  }
  render() {
    if (this.props.loading === true) {
      return <h3>Loading</h3>
    }

    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}


// signature: const buildConnectedComponent = connect(mapStateToProps, mapDispatchToProps);
export default connect(state => ({
  loading: state.loading,
}))(App)
