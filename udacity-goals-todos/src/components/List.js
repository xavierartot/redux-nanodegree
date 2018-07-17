import React from 'react'

export default function List(props) {
  return (
    <div>
      <ul>
        {
          props.items.map(element => (
            <li key={element.id}>
              <span
                onClick={() => props.toggle && props.toggle(element.id)} /* if props.toggle exist then call the method */
                style={{ textDecoration: element.complete ? 'line-through' : 'none' }}
              >{element.name}
              </span>
              <button
                onClick={() => props.remove(element)}
              >
                    X
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
