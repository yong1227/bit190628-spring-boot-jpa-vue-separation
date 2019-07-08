import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Join from '../containers/customer/Join'
import Login from '../containers/customer/Login'
import MyPage from '../containers/customer/MyPage'
import Home from '../containers/common/Home'
import Hello from '../containers/customer/Hello.jsx'
import LightSwitch from '../containers/customer/LightSwitch.jsx'
import Timer from '../containers/common/Timer.jsx'
import TodoApp from '../containers/customer/TodoApp.jsx'

const MyNavbar = () => {
  return (
    <Router>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>BITCAMP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/Home">Home</Link>
          </Nav.Link>
          <Nav.Link><Link to="/TodoApp"> TodoApp스케쥴러 </Link></Nav.Link>
          <Nav.Link><Link to="/Hello"> Hello</Link></Nav.Link>
          <Nav.Link><Link to="/LightSwitch"> LightSwitch</Link></Nav.Link>
          <Nav.Link><Link to="/Timer"> Timer</Link></Nav.Link>

          <NavDropdown title="회원관리" id="basic-nav-dropdown">
            <NavDropdown.Item > 
              <Link to="/Join"> 회원가입</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Login"> 로그인 </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/MyPage">  마이 페이지 </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>회원탈퇴</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    <Route path="/login"  component={Login}/>
    <Route path="/join"  component={Join}/>
    <Route path="/mypage"  component={MyPage}/>
    <Route path="/Home"  component={Home}/>
    <Route path="/Hello"  component={Hello}/>
    <Route path="/LightSwitch"  component={LightSwitch}/>
    <Route path="/Timer"  component={Timer}/>
    <Route path="/TodoApp"  component={TodoApp}/>
    </Router>
  );
}
export default MyNavbar
