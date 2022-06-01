import React, { Component } from 'react'
import LeftSideLogin from './LeftSideLogin';

import {Button, Alert, Row, Col} from 'react-bootstrap';



export class Login extends Component {
  render() {
    return (
      <div>
          <Row className="landing">
                <Col>
                    <LeftSideLogin/>
                </Col>
                
          </Row>
      </div>
    )
  }
}

export default Login