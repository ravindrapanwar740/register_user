import React, { Component } from 'react'
import { Table, Form, Container } from "react-bootstrap";


class LoginAction extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          searchData: null,
          noData: false,
        };
      }
      search(key) {
        console.warn(key);
        fetch("http://localhost:3000/user?q=" + key).then((data) => {
          data.json().then((resp) => {
            console.warn("Respo..", resp);
            if (resp.length > 0) {
              this.setState({ searchData: resp, noData: false });
            } else {
              this.setState({ noData: true, searchData: null });
            }
          });
        });
      }
    render() {
        return (
            <div>
                  UserName: <Form.Control  type="text" 
          onChange={(event) => this.search(event.target.value)}
          
          placeholder="Name"
        />
        
        {/* <br />
                Email: <Form.Control  type="text" 
          onChange={(event) => this.search(event.target.value)}
          placeholder="Email"
        /> */}
 <div>

          {this.state.searchData ? (
            <div className="row-search">
              <Table striped bordered hover>
                <thead>
                   <tr>   
                {/*  <th>Name</th>
                  <th>Lastname</th>
                    <th>Username</th> */}
                    <th></th>
                    {/* <th>Password</th> */}
                    <th>Email</th>
                    <th></th>
                    
                  </tr>
                </thead>
                <tbody>
                  {this.state.searchData.map((item) => (
                    <tr>
                     
                      <td>
                        <b>{item.name}</b>
                      </td>

                      <td>
                        <b>{item.email}</b>
                      </td>
                     
                      
                      {/* <td>
                        <Link to={"/update/" + item.id}>
                          <FontAwesomeIcon icon={faEdit} color="orange" />
                        </Link>
                        <span onClick={() => this.delete(item.id)}>
                          <FontAwesomeIcon icon={faTrashAlt} color="red" />
                        </span>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            ""
          )}
          {this.state.noData ? <h3>No data found</h3> : null}
        </div>


            </div>
        )
    }
}

export default LoginAction
