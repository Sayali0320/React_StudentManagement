import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./Employee";
import {v4 as uuid} from "uuid";
import { useNavigate } from "react-router-dom";
 
function Add(){
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    let history = useNavigate()

    const submitHandler= (e) =>{
        e.preventDefault()

        const ids = uuid()
        let uniqueId = ids.slice(0, 8)

        let a = name;
        let b = age;

        Employee.push({id: uniqueId, Name: a, Age: b})
        history('/')
    }

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="nb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter your name" required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="nb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter your age" required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type="submit" onClick={(e)=> submitHandler(e)}>Submit</Button>
            </Form>
        </div>
    )
}
export default Add