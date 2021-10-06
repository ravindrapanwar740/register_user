import logo from './logo.svg';
import './App.css';
import Home_Page from './components/Home';
import Log_In from './components/Log_In';
import { BrowserRouter as Router, Link, Route, } from "react-router-dom";
import { Navbar, Nav, Button,  } from "react-bootstrap";
import Register from './components/Register';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
    {/* <Home /> */}
    {/* <Home_Page /> */}

    <Log_In />

     {/* <Register /> */}
    </div>
  );
}

export default App;


