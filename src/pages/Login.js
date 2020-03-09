import React from 'react';

import '../mycss/style.css';
import Banner from '../components/Banner';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faEnvelope,
  faKey,
  faBars,
  faPhone,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faBars, faPhone, faAngleRight);

function Login() {
  return (
    <div className="App">
      <div className="wrap">
        <form className="login-form" action="">
          <div className="form-header">
            <h3>Login Form</h3>
            <p>Login to access your dashboard</p>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="email@example.com"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-input"
              placeholder="password"
            />
          </div>

          <div className="form-group">
            <button className="form-button" type="submit">
              Login
            </button>
          </div>
          <div className="form-footer">
            Don't have an account? <a href="#">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
