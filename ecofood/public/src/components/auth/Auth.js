import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

// class Login extends Component {
//   render() {
//     return (
const Login = () => (
      <div className="container login">
        <form className="form-signin" action="/users/login" method="post">
          <h2 className="form-signin-heading text-center">Log in</h2>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-secondary btn-block" type="submit">
            Log in
          </button>
        </form>
        <div id="create" className="text-center">
          <p>
            First time? <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
);
//   }
// }

export default Login;
