import React, { Component }  from 'react';
import { Navbar, Nav, NavItem, Col } from 'react-bootstrap';
import '../css/Navigation.css';
import withAuth from './withAuth'
import AuthService from '../services/AuthService'
import { Redirect } from 'react-router-dom'

const Auth = new AuthService()

export default class Navigation extends Component {

  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login')
  }

  render() {
    return (
      <Navbar className = "pages" id="p">
   <Navbar.Header>
     <Navbar.Brand>
       <a href="/"><h1 className = "pages">HotSpotz</h1></a>
     </Navbar.Brand>
   </Navbar.Header>
   <Nav className = "two">
     <div className = "navlist">
     <NavItem className = "hello" eventKey={1} href="/register">
       Register
     </NavItem>
     <NavItem className = "hello" eventKey={2} href="/login">
      Login
     </NavItem>
     <NavItem className = "hello2" eventKey={5} href="/profile">
       Profile
     </NavItem>
     <NavItem className = "hello2" eventKey={5} href="/area">
       Review
     </NavItem>
     <NavItem className = "hello2" eventKey={5} href="/newreview">
     Submit New Review
     </NavItem>
     <NavItem className = "hello2" eventKey={5} onClick={Auth.logout} href="/login">
      Logout
    </NavItem>
     </div>
   </Nav>
 </Navbar>

)
}
};
