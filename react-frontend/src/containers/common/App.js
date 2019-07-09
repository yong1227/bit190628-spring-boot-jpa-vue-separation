import React, {Component} from 'react';
import '../../assets/css/App.css';
import Navbar from '../../components/MyNavbar';

class App extends Component{
  constructor(props){
    super(props)
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
