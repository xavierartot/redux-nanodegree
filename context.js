// The App component renders Parent, which renders Child, which renders Grandchild. However, what's important to notice here is that the Grandchild component wants to render name -- but the data for name lives inside the App component.

// Because Grandchild is so deeply nested, we have to pass the name prop one-by-one from App through all the components until it reaches Grandchild. What's more: we must do this even if any of the components along the way (Parent and Child) aren't even concerned with the name data!

// This process of "threading props" to send data to a child component can be tiresome, and perhaps even error-prone. Luckily, we can avoid it with React's Context API. To begin, we'll use React's createContext() function to return an object with a Provider as well as a Consumer.
//
import React from 'react'
import { render } from 'react-dom'

const Context = React.createContext()

function Parent() {
  return (
    <div>
      <h1>Parent</h1>
      <Child />
    </div>
  )
}

function Child() {
  return (
    <div>
      <h1>Child</h1>
      <Grandchild />
    </div>
  )
}

function Grandchild({ name }) {
  return (
    <Context.Consumer>
      {name => (
        <div>
          <h1>Grandchild</h1>
          <h3>Name: {name}</h3>
        </div>
      )}
    </Context.Consumer>
  )
}

class App extends React.Component {
  render() {
    const name = 'Tyler'

    return (
      <Context.Provider value={name}>
        <Parent />
      </Context.Provider>
    )
  }
}

render(<App />, document.getElementById('root'))
