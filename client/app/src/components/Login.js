import React, { Component } from "react";
import { Button, Alert, Row, Col, Form } from "react-bootstrap";
import "../css/Login.css";

export class Login extends Component {
  render() {
    return (
      <Form>
        <h4>Login to your account</h4>
        <img
          src="https://cdn.dribbble.com/users/479536/screenshots/14210962/ht_logos_xler8brain_4x.jpg"
          alt="logo"
        ></img>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="login-button">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    );
  }
}

export default Login;
