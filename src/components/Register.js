import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NavigationPages from './NavigationPages'
import '../css/NavigationPages.css';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        name: '',
        username: '',
        password: '',
        password_confirmation: ''
      },
      apiUrl: 'http://localhost:3000',
      newUserSuccess: false
    };
  }


  handleChange(event) {
    const formState = Object.assign({}, this.state.form);
    formState[event.target.name] = event.target.value;
    this.setState({ form: formState });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    fetch(`${this.state.apiUrl}/users`,
      {
        body: JSON.stringify({ user: this.state.form }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then((res) => {
      if (res.status !== 422) {
        this.setState({
          newUserSuccess: true
        });
      }
    });
  }

  render() {
    return (
      <div>
      <NavigationPages />
      <div className="center">
        <div className="card">
          <h1>Register</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}
          >
            <input
              className="form-item"
              placeholder="Email Address"
              name="email"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.email}
            />
            <input
              className="form-item"
              placeholder="Name"
              name="name"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.name}
            />
            <input
              className="form-item"
              placeholder="Username"
              name="username"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.username}
            />
            <input
              className="form-item"
              placeholder="Password"
              name="password"
              type="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.password}
            />
            <input
              className="form-item"
              placeholder="Confirm Password"
              name="password_confirmation"
              type="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.password_confirmation}
            />
            <input
              className="form-submit"
              value="SUBMIT"
              type="submit"
            />
          </form>
        </div>
        {this.state.newUserSuccess && <Redirect to="/login" />}
      </div>
      </div>
    );
  }
}
