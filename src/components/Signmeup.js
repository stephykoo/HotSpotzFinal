import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/Signmeup.css';
import AuthService from '../services/AuthService';

class Registration extends React.Component {

  constructor() {
    super(),
      this.state = {
        errorUserMessage: '',
        username: '',
        password: '',
        conPassword: '',
        error: 0
      }
  }

  onUsernameChange(e) {
    const usernameExists = ['chelle', 'username', 'venturina'];

    this.setState({
      username: e.target.value },
      function() {
        if(usernameExists.indexOf(this.state.username) > -1 ) {
          this.setState({
            errorUserMessage: 'Username already exists! Please try again',
            error: + 1
          });
        } else {
          this.setState({
            errorUserMessage: '',
            error: - 1
          });
        }
      });
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    });

    if(String(this.state.email).match(/(.+)@(.+){2,}\.(.+){2,}/)) {
      this.setState({
        errorEmailMessage: '',
        error: -1
      });
    } else {
      this.setState({
        errorEmailMessage: 'Invalid email',
        error: + 1
      });
    }
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  onConPasswordChange(e) {
    this.setState({
      conPassword: e.target.value
    });
  }

  validatePass(e) {

    if(this.state.password === this.state.conPassword) {
      this.setState({
        errorPasswordMessage: '',
        error: - 1
      });
    } else {
      this.setState({
        errorPasswordMessage: 'Password not match!',
        error: + 1
      });
    }
  }

  onSubmit(e) {
    if(this.state.username === '' || this.state.email === '' || this.state.password === '' || this.state.conPassword === '') {
        this.setState({
          errorMessage: 'Please Fill up all required fields.'
        });
      } else {
        if(this.state.error > -1 ) {
          console.log(this.state.error);
          this.setState({
            errorMessage: 'Please fixed all the errors in fields'
          });
        }  else {
          this.setState({
            errorMessage: 'You Successfully created an account!'
          });
        }
      }
   }
fileChangerHandler(event){
  const file =event.target.file[0]
}
  render() {

    return (
      <div>
    

        <div className="container">
          <h2>SIGN UP</h2>

          <p className="required">* Required Fields</p>
          <div className="errorMessage">
            {this.state.errorMessage}
          </div>

          <form>
            <input type="text" value={this.state.username}
              onChange = { this.onUsernameChange.bind(this) }
              onKeyDown = { this.onUsernameChange.bind(this) }
              placeholder='Enter Username *' />
            <div className="errorMessage">
              {this.state.errorUserMessage}
            </div>

            <input type="email" value={this.state.email}
              onChange={ this.onEmailChange.bind(this)}
              placeholder='email@mail.com  *' />
            <div className="errorMessage">
              {this.state.errorEmailMessage}
            </div>

            <input type="password" value={this.state.password}
              onChange = { this.onPasswordChange.bind(this)}
              onKeyUp = { this.validatePass.bind(this) }
              placeholder='Password *' />

            <input type="password" value={this.state.conPassword}
              onChange = { this.onConPasswordChange.bind(this) }
              onKeyUp = { this.validatePass.bind(this) }
              placeholder='Confirm Password *' />
            <div className="errorMessage">
              {this.state.errorPasswordMessage}
            </div>
            <br />
            <input
            type="file"
            onChange={this.fileChangerHandler.bind(this)}
            />
            <input type="button" value="SUBMIT"
              onClick = { this.onSubmit.bind(this) } />

          </form>





          <br />

        </div>
			</div>
    );
  }
}

export default Registration
