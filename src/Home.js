import React, { Fragment } from "react";
import { Button, Tables } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from "./Employee";
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from "react-router-dom";
function Home(){
    let history = useNavigate()

    const createHandler = () => {

    }
    const editHandler = (id, name, age) => {
        localStorage.setItem("Name", name)
        localStorage.setItem("Age", age)
        localStorage.setItem("Id", id)
    }
    const deleteHandler = (id) =>{
        var index = Employee.map(function(e) {
            return e.id
        }).indexOf(id)

        Employee.splice(index,1)

        history('/')
    }
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Link to={'/create'}>
                    <Button size="lg" onClick={() => createHandler()}>Add</Button>&nbsp;
                </Link>
                <br></br><br></br>
                <Table striped bordered hover size="sm" variant="light">
                    <thead style={{backgroundColor: "black"}}>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employee && Employee.length > 0 
                            ?
                            Employee.map((item) =>  {
                                return(
                                    <tr>
                                        <td>{item.Name}</td>
                                        <td>{item.Age}</td>
                                        <td>
                                            <Link to ={'/edit'}>
                                            <Button onClick={()=> editHandler(item.id, item.Name, item.Age)}>EDIT</Button>&nbsp;&nbsp;
                                            </Link>
                                            <Button onClick={()=> deleteHandler(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>

                </Table>
            </div>
        </Fragment>
        
    )
}
export default Home