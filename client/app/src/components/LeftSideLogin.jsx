import React from 'react'
import {Form, Button} from 'react-bootstrap'
import "../css/Login.css";

const LeftSideLogin = () => {
  return (
    <div>
        <br/>
        <br/>
        <br/>
        
        <Form className="Left">
            <Form.Group>
                <Form.Label>
                    Email
                </Form.Label>
                <Form.Control type="email"/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control type="password"/>
            </Form.Group>
            <br/>
            <Button type="submit">Submit</Button>
        </Form>
        
    </div>
  )
}

export default LeftSideLogin