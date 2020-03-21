import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../utils/Common';
import { useHistory } from 'react-router';
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

function Login(props) {
  let history = useHistory();
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post('http://localhost:8000/api/login', {
        email: email.value,
        password: password.value
      })
      .then(response => {
        setLoading(false);
        setUserSession(response.data.access_token, response.data.name);
        // props.history.push('/patient/dashboard');

        history.push('/patient/dashboard');
      })
      .catch(error => {
        console.log(error);

        setLoading(false);
        if (error.response.status === 401) {
          setError(error.response.data.message);
        } else setError('Something went wrong. Please try again later.');
      });
  };
  return (
    <div className="App">
      <div className="wrap">
        <form className="login-form" action="">
          <div className="form-header">
            <h3 className="login-heading">Login </h3>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="email@example.com"
              {...email}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-input"
              placeholder="password"
              {...password}
              autoComplete="new-password"
            />
          </div>
          {error && (
            <>
              <small style={{ color: 'red' }}>{error}</small>
              <br />
            </>
          )}
          <br />
          <div className="form-group">
            {/* <button
              className="form-button"
              value={loading ? 'Loading...' : 'Login'}
              onClick={handleLogin}
              disabled={loading}
            >
              Login
            </button> */}
            <input
              type="button"
              className="form-button"
              value={loading ? 'Loading...' : 'Login'}
              onClick={handleLogin}
              disabled={loading}
            />
          </div>
          <div className="form-footer">
            <Label className="signupLink">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </Label>
          </div>
          <div className="form-footer">
            <Label className="signupLink">
              <Link to="/forgot-password">Forgot Password</Link>
            </Label>
          </div>
        </form>
      </div>
    </div>
  );
}
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange
  };
};
export default Login;
