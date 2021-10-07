import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import Register from "./Register";
import Home from "./Home";
import RegisterData from "../Action/RegisterData";
import LoginAction from "../Action/LoginAction";
//import HomeDataSearch from "../Actions/HomeDataSearch";
import { useState } from 'react';



class Log_In extends Component {
  //
  constructor(props) {
    super(props)
  
    this.state = {
       email:''
    }
    // this.search=this.search.bind(this)
    // this.onSubmit=this.onSubmit.bind(this)

    //
    // const [email, setEmail] = useState('');
    // let errorsObj = { email: '', password: '' };
    // const [errors, setErrors] = useState(errorsObj);
    // const [password, setPassword] = useState('');


    //
  }
  //
// check(e)
//   {

   
//       e.preventDefault();
//       let error = false;
//       const errorObj = { ...errorsObj };
//       if (email === '') {
//           errorObj.email = 'Email is Required';
//           error = true;
//       }

//       if (password === '') {
//           errorObj.password = 'Password is Required';
//           error = true;
//       }

//       setErrors(errorObj);

//       if (error) return;
//   }

  //
  search(key) {
    console.log("Event input", key);
    //
// this.setState({[key.target.name]:key.target.value})
    //
  }

  searchp(key) {
    console.log("Event password", key);
  }
//

// onSubmit(e)
// {
// e.preventDefault();
// console.log(this.state)
// }




//
  render() {
    return (
      <div >
        <h1>LogIn Page</h1>
        <div className="col-sm-6 offset-sm-5">
        <Router>
          {/* <Nav.Button></Nav.Button>
        <Button href="#link"> <Button to="home">Log In </Button>  </Button>  */}

          <Navbar expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav.Link href="#link">
                {/* <div class="form-group mx-sm-3 mb-2">    */}
                <Form >
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    //
                    // value={this.state.username}
                    //
                    onChange={(event) => this.search(event.target.value)}
                  >

                    <Form.Label>Email address:</Form.Label>
                   
                    <Form.Control type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text> */}
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                    onChange={(event) => this.searchp(event.target.value)}
                  >
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
{/* 
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>  */}
                   <Button variant="primary" type="submit">
                    Submit
                  </Button>

                  <Nav.Link href="#link">
                    <Link to="/home">Log in</Link>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <Link to="/cancel">Cancel</Link>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <Link to="/register">Register</Link>
                  </Nav.Link>
                </Form>
              
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar> 

          <Route path="/register" component={RegisterData} />
          <Route path="/home" component={LoginAction} />
          {/* <Route path="/homadatasearch" component={HomeDataSearch} /> */}
        </Router>
      </div>
     </div>
    );
  }
}

export default Log_In;

{
  /* <label>Username:</label>
                <Form.Control type="text" id="root"/>
                <br />
                <br />
        {console.log("data:",this.id)}
                Password:<Form.Control type="password" />
                <br />
                <br />


             <Nav.Link href="#link">
                  <Link to="/home">Log in</Link>
                </Nav.Link>



                <Nav.Link href="#link">
                  <Link to="/cancel">Cancel</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/register">Registration</Link>
                </Nav.Link> */
}

{
  /* <Router>
<Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav.Link href="#home">
      {" "}
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
    </Nav.Link>
    <Nav.Link href="#link">
      <Link to="/search">
        <FontAwesomeIcon icon={faSearch} /> Search
      </Link>
    </Nav.Link>
    <Nav.Link href="#link">
      <Link to="/phones">
        <FontAwesomeIcon icon={faList} /> Phones
      </Link>
    </Nav.Link>
    <Nav.Link href="#link">
      <Link to="/list2">
        <FontAwesomeIcon icon={faList} />
        List
      </Link>
    </Nav.Link>
    <Nav.Link href="#link">
    
      <Link to="/addphone">
        <FontAwesomeIcon icon={faPlusSquare} />
        AddPhone
      </Link>
    </Nav.Link>
    <Nav.Link href="#link">
      
      <Link to="/about">
        <FontAwesomeIcon icon={faInfoCircle} />
        About
      </Link>
    </Nav.Link>
    <Nav.Link href="#link">
      
      <Link to="/support">
        <FontAwesomeIcon icon={faQuestionCircle} />
        Support
      </Link>
    </Nav.Link>
  </Navbar.Collapse>
</Navbar>

<Route exact path="/" component={Home} />
<Route path="/search" component={Search} />
<Route path="/phones" component={Phones} />
<Route path="/list2" component={List2} />
<Route path="/addphone" component={AddPhone} />
<Route path="/about" component={About} />
<Route path="/support" component={Support} />
</Router> */
}
