import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import RegisterData from "../Action/RegisterData";

class Register extends Component {
  render() {
    return (
      <div>
        <h1>Registration</h1>
        <Router>
          <Navbar expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            

              <Nav.Link href="#link">
                First Name: <input></input>
                <br />
                <br />
                Last Name: <input></input>
                <br />
                <br />
                Username: <input></input>
                <br />
                <br />
                Password: <input type="password"></input>
                <br />
                <br />

                <Nav.Link href="#link"></Nav.Link>
                <Link to="/registerdata">Submit</Link>
                <Nav.Link href="#link">
                  <Link to="/cancel">Cancel</Link>
                </Nav.Link>

                <br />
              </Nav.Link>
              
            </Navbar.Collapse>
          </Navbar>
          <Route path="/registerdata" component={RegisterData} />
        </Router>
      </div>
    );
  }
}

export default Register;
