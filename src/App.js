import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./MyComponents/Header"
import AddTodo from "./MyComponents/AddTodo"
import Todos from "./MyComponents/Todos"
import Footer from "./MyComponents/Footer"
import React, { useState } from 'react'

function App() {
  const onDelete = (x) => {
    return (
      console.log("i am on delete of todo", x),
      settodos(todos.filter((e) => {
        return e !== x;
      }))
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
  }

  const [todos, settodos] = useState([])


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
