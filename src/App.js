
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./MyComponents/Header"
import AddTodo from "./MyComponents/AddTodo"
import Todos from "./MyComponents/Todos"
import Footer from "./MyComponents/Footer"
import React, { useState, useEffect } from 'react'

function App() {
  let inittodo;
  if (localStorage.getItem("x") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("x"));
  }
  const animation=(x)=>{
    
  }
  const onDelete = (todo) => {
    return(
    console.log("i am on delete of todo", todo),
      settodos(todos.filter((e) => {
        return e !== todo;
      }))
      // localStorage.setItem("todos", JSON.stringify(todos))
    )
  }

  const addTodo = (a, b) => {
    console.log("I am Adding this todo", a, b)
    const Mytodo = {
      Sno: todos.length,
      Title: a,
      Description: b,
    }
    settodos([...todos, Mytodo]);
    console.log(Mytodo)

    // localStorage.setItem("todos",JSON.stringify(todos));
  }


  const [todos, settodos] = useState(inittodo)

  useEffect(() => {
    localStorage.setItem("x", JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <Header title="My Todos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>

  );
}

export default App;
