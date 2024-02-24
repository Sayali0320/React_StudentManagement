import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./Employee";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = Employee.map(function (e) {
    return e.id;
  }).indexOf(id);

  const submitHandler = (e) => {
    e.preventDefault();

    let a = Employee[index];
    a.Name = name;
    a.Age = age;
    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
      <b style={{fontSize:"30px"}}>Edit Student</b>
        <Form.Group className="nb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="nb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter your age"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" onClick={(e) => submitHandler(e)}>
          Update
        </Button>
      </Form>
    </div>
  );
}
export default Edit;
