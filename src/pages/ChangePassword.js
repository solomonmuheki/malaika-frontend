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
            <h3 className="login-heading">Change Password? </h3>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Old Password"
              value=""
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="New Password"
              value=""
            />
          </div>
          <div className="form-group">
            <button className="btn btn-lg btn-success btn-block">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
