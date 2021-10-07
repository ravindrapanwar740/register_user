import logo from './logo.svg';
import './App.css';
import Home_Page from './components/Home';
import Log_In from './components/Log_In';
import { BrowserRouter as Router, Link, Route, } from "react-router-dom";
import { Navbar, Nav, Button,  } from "react-bootstrap";
import Register from './components/Register';
import Home from './components/Home';
//import HomeDataSearch from './Actions/HomeDataSearch';
//import {useDispatch} from 'react-redux'

function App() {
  // const dispatch = useDispatch();
  // const handleOnClick=()=>
  // {
  //   dispatch(HomeDataSearch())
  // }
  return (
    <div className="App">



{/* <button onClick={handleOnClick}>click</button>
 */}


    {/* <Home /> */}
    {/* <Home_Page /> */}



    <Log_In />



{/* <HomeDataSearch /> */}
     {/* <Register /> */}
    </div>
  );
}

export default App;


