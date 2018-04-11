import React, { Component }  from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../css/Navigation.css';
import withAuth from './withAuth'
import AuthService from '../services/AuthService'
import { Redirect } from 'react-router-dom'

const Auth = new AuthService()

export default class Navigation extends Component {

  render() {
    return (
      <Navbar className ="homepage" id = "hp">
   <Navbar.Header>
     <Navbar.Brand>
       <a href="/"><h1 className = "nav">Find the Best San Diego Hot Spot</h1></a>
     </Navbar.Brand>
   </Navbar.Header>
   <Nav className = "one">
     <div className = "choices">
     <NavItem className = "hello" eventKey={1} href="/register">
       <button type="button" class="btn btn-primary">Register</button>
     </NavItem>
     <NavItem className = "hello" eventKey={2} href="/login">
       <button type="button" class="btn btn-info">Login</button>
     </NavItem>
     <NavItem className = "hello2" eventKey={5} href="/profile">
       <button type="button" class="btn btn-primary">Profile</button>
     </NavItem>
     <NavItem className = "hello2" eventKey={5} href="/area">
       <button type="button" class="btn btn-info">Review</button>
     </NavItem>
     <NavItem className = "hello2" eventKey={5} href="/newreview">
     <button type="button" class="btn btn-primary">Submit New Review</button>
     </NavItem>
     <NavItem className = "hello2" eventKey={5} href="/login">
      <button type="button" class="btn btn-primary" onClick={Auth.logout}>Logout</button>
    </NavItem>
     </div>
   </Nav>
 </Navbar>
)
}
};
