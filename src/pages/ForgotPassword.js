import React from 'react';

import '../mycss/style.css';
import Banner from '../components/Banner';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import { Label } from 'reactstrap';
import {
  faEnvelope,
  faKey,
  faBars,
  faPhone,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faBars, faPhone, faAngleRight);

function ForgotPassword() {
  return (
    <div className="App">
      <div className="wrap">
        <form autocomplete="off" className="pass-reset-form">
          <div className="form-header">
            <h3 className="login-heading">Forgot Password? </h3>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email *"
              value=""
            />
          </div>
          <div className="form-group">
            <button className="btn btn-lg btn-success btn-block">
              Reset Password
            </button>
          </div>
          <div className="form-footer">
            <Label className="signupLink">
              Remembered your password? <Link to="/login">Log in</Link>
            </Label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
