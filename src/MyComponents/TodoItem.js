import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoItem = (props) => {
  return (
    <div>
      <h4>{props.todo.Title}</h4>
      <p>
        {props.todo.Description}
      </p>
      <Button variant="success btn-sm" onClick={()=>{props.animation(props.todo)}}>press if done</Button>{' '}
      <button type="button" className="btn btn-danger btn-sm" onClick={() => { props.onDelete(props.todo) }} >Delete</button>
      <hr />

    </div>
  )
}
export default TodoItem