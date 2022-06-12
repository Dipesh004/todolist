import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import "./AddTodo.css"
import { useState } from 'react';

function AddTodo(props) {
    const[Title, settitle]=useState("");
    const[Description, setdesc]=useState("");
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!Title || !Description){
            alert("Title or Desc Cannot be empty");
        }else{
            props.addTodo(Title,Description);
        }
    }
    return (
        <div className="container1">
            <h4>Add a Todo</h4>
            <Form onSubmit={onSubmit} >
                <Form.Group className="mb-3" controlId="Title">
                    <Form.Label>Todo Title</Form.Label>
                    <Form.Control type="text" value={Title} onChange={(e)=>settitle(e.target.value)} placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="desc">
                    <Form.Label>Todo Description</Form.Label>
                    <Form.Control type="text" value={Description} onChange={(e)=>setdesc(e.target.value)} placeholder="" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Add Todo
                </Button>
            </Form>
        </div>
    )
}

export default AddTodo