import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from '../../present/nav/MyNavbar';

class App extends Component{
  constructor(props){
    super()
  }
  render(){
    return(
      <div className='wrapper'>
        <Navbar></Navbar>
      </div>
    )
  }
}

export default App;
