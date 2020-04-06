import React from 'react';

import '../mycss/style.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import ReactSelect from 'react-select';

import axios from 'axios';
import {
  faEnvelope,
  faKey,
  faBars,
  faPhone,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import { Label } from 'reactstrap';

library.add(faEnvelope, faKey, faBars, faPhone, faAngleRight);

class ForgotPassword extends React.Component {
  //
  constructor() {
    super();
    this.state = {
      form: {
        email: ''
      },

      formErrors: {
        email: null
      }
    };
  }

  handleChange = e => {
    const { name, value, checked } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};

    if (name === 'language') {
      // handle the change event of language field
      if (checked) {
        // push selected value in list
        formObj = { ...form };
        formObj[name].push(value);
      } else {
        // remove unchecked value from the list
        formObj = {
          ...form,
          [name]: form[name].filter(x => x !== value)
        };
      }
    } else {
      // handle change event except language field
      formObj = {
        ...form,
        [name]: value
      };
    }
    this.setState({ form: formObj }, () => {
      if (!Object.keys(formErrors).includes(name)) return;
      let formErrorsObj = {};
      if (name === 'password' || name === 'confirmPassword') {
        let refValue = this.state.form[
          name === 'password' ? 'confirmPassword' : 'password'
        ];
        const errorMsg = this.validateField(name, value, refValue);
        formErrorsObj = { ...formErrors, [name]: errorMsg };
        if (!errorMsg && refValue) {
          formErrorsObj.confirmPassword = null;
          formErrorsObj.password = null;
        }
      } else {
        const errorMsg = this.validateField(
          name,
          name === 'language' ? this.state.form['language'] : value
        );
        formErrorsObj = { ...formErrors, [name]: errorMsg };
      }
      this.setState({ formErrors: formErrorsObj });
    });
  };

  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case 'email':
        if (!value) errorMsg = 'Please enter Email.';
        else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        )
          errorMsg = 'Please enter valid Email.';
        break;

      default:
        break;
    }
    return errorMsg;
  };

  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map(x => {
      let refValue = null;

      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };

  handleSubmit = () => {
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    }

    console.log('Data: ', form);

    let url = 'http://localhost:8000/api/sendPasswordResetLink';

    axios
      .post(url, form)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { form, formErrors } = this.state;
    return (
      <div className="App">
        <div className="wrap">
          <div className="pass-reset-form">
            <div className="form-header">
              <h3 className="login-heading">Forgot Password? </h3>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Email*"
                value={form.email}
                onChange={this.handleChange}
                onBlur={this.handleChange}
              />
              {formErrors.email && (
                <span className="err">{formErrors.email}</span>
              )}
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-lg btn-success btn-block"
                onClick={this.handleSubmit}
              >
                Reset Password
              </button>
              <div className="form-footer">
                <Label className="signupLink">
                  Remembered your password? <Link to="/login">Log in</Link>
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
