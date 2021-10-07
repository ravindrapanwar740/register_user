import React, { Component } from 'react'
import { Form, Button, Badge, Placeholder, ProgressBar,InputGroup,FormControl} from "react-bootstrap";


class RegisterData extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: null,
          lastname: null,
          username: null,
          email:null,
          password: null,
        };
      }
    
      create() {
        fetch("http://localhost:3000/user", {
          method: "Post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(this.state),
        }).then((result) => {
          result.json().then((resp) => {
            alert("data insert");
          });
        });
      }
    
        render() {
            return (
              <div className="col-sm-6 offset-sm-3">
                {/* <h1><Badge bg="danger">Creating...</Badge></h1> */}
                <h1>Creating........</h1>
                               <div>
                  <Form>
                    <Form.Control
                      type="text"
                      onChange={(event) => {
                        this.setState({
                          name: event.target.value,
                        });
                      }}
                      placeholder="Enter Name"
                    />
                    <br />
                    <br />
                    <Form.Control
                      onChange={(event) => {
                        this.setState({
                          lastname: event.target.value,
                        });
                      }}
                      placeholder="Enter Last Name"
                    />
                    <br />
                    <br />
                    <Form.Control
                      onChange={(event) => {
                        this.setState({
                          username: event.target.value,
                        });
                      }}
                      placeholder="Enter username"
                    />
                    <br />
                    <br />

                    <InputGroup className="mb-3">
                    <Form.Control
                      onChange={(event) => {
                        this.setState({
                          email: event.target.value,
                        });
                      }}
                      placeholder="Enter Email @..."
                    />
                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                    </InputGroup>
                    <br />
                    <br />
                    <Form.Control
                     placeholder="Recipient's username"
                     aria-label="Recipient's username"
                     aria-describedby="basic-addon2"
                      onChange={(event) => {
                        this.setState({
                          password: event.target.value,
                        });
                      }}
                      placeholder="Enter Password"
                    />
                    <br />
                    <br />
                    <Button
                      variant="outline-success"
                      type="Submit"
                      onClick={() => {
                        this.create();
                      }}
                    >
                      Submit
                    </Button>
                    <Button type="Cancel">
                        Cancel
                        </Button>


  {/* <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
  </InputGroup> */}

                  </Form>
                </div>
              </div>
            );
          }
    }


export default RegisterData
