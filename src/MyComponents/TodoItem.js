import React from 'react'
import "./Todoitem.css"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';

const TodoItem = (props) => {
  let initcolor = localStorage.getItem(props.todo.Sno)
   if(!initcolor){
     initcolor="container3"
   }
  const [colorchange,setcolorchange]=useState(initcolor);
  
  useEffect(()=>{
  //  eslint-disable-next-line
    localStorage.setItem(props.todo.Sno,colorchange)},[colorchange])

  const ColorChange=()=>{
    setcolorchange("container4")
  }


  // localstorage.setItem("y", JSON.stringify(ColorChange))
  return (
    <><div className={colorchange}>
      <h4>{props.todo.Title}</h4>
      <p>
        {props.todo.Description}
      </p>
      <Button variant="success btn-sm" onClick={ColorChange}>press if done</Button>
      <button type="button" className="btn btn-danger btn-sm" onClick={() => { props.onDelete(props.todo) }} >Delete</button>
    </div>
    <div className="container5">
      <hr />
    </div>
    </>
  )
}
export default TodoItem;