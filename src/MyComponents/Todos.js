import "./Todos.css"
import React from 'react'
import TodoItem from "./TodoItem"

const Todos = (props) => {
  // const message=(()=>{
  //   <h4>No Todos To Display</h4>
  // })
  return (
    <div className="container">
    
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length === 0 ? <h5 className="message">No Todos To Display</h5>  : props.todos.map((todo) => {
        return(
        <TodoItem todo={todo} key={todo.Sno} onDelete={props.onDelete} animation={props.animation} />
      )})}

    </div>
  )
}
export default Todos 