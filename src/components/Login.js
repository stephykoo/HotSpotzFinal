import React, { Component } from 'react';
import "../css/Login.css";
import AuthService from '../services/AuthService';
import withAuth from './withAuth'
import { Link } from 'react-router-dom'
import NavigationPages from './NavigationPages'
import '../css/NavigationPages.css';


class Login extends Component {
  constructor() {
  super()
  this.Auth = new AuthService()
  this.state={
    username: '',
    password: ''
  }
}

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  handleLogout(){
    this.Auth.logout()
    this.props.history.replace('/login')
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.Auth.login(this.state.username, this.state.password)
    .then(res => {
      this.props.history.replace('/')
      alert('You are logged in!');
    })
    .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div>
      <NavigationPages />
      <div class="alert alert-info" role="alert">
        Please register before logging in!
      </div>
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}
          >
            <input
              id = "username"
              className="form-item"
              placeholder="Username"
              name="username"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.username}
            />
            <input
              id = "password"
              className="form-item"
              placeholder="Password"
              name="password"
              type="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.password}
            />
            <input
              id = "submit_button"
              className="form-submit"
              value="Login"
              type="submit"
            />
            <Link to="/register"
              id = "register_button"
              className="form-submit-link">Not Registered? Sign up here</Link>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default Login
