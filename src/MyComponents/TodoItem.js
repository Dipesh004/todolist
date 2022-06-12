import React from 'react'
const TodoItem = (props) => {
  return (
    <div>
      <h4>{props.todo.Title}</h4>
      <p>
        {props.todo.Description}
      </p>
      <button type="button" className="btn btn-danger btn-sm" onClick={() => { props.onDelete(props.todo) }} >Delete</button>

    </div>
  )
}
export default TodoItem