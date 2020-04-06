import React from 'react';
import '../mycss/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
import {
  faEnvelope,
  faKey,
  faBars,
  faPhone,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faBars, faPhone, faAngleRight);
class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: '',

        password: '',
        confirmPassword: ''
      },

      formErrors: {
        email: null,

        password: null,
        confirmPassword: null
      }
    };
  }

  validateNumber = evt => {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
      key = theEvent.clipboardData.getData('text/plain');
    } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

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

      case 'password':
        // refValue is the value of Confirm Password field
        if (!value) errorMsg = 'Please enter Password.';
        else if (refValue && value !== refValue)
          errorMsg = 'Password and Confirm Password does not match.';
        break;
      case 'confirmPassword':
        // refValue is the value of Password field
        if (!value) errorMsg = 'Please enter Confirm Password.';
        else if (refValue && value !== refValue)
          errorMsg = 'Password and Confirm Password does not match.';
        break;
      // case 'language':
      //   if (value.length === 0) errorMsg = 'Please select Language.';
      //   break;
      default:
        break;
    }
    return errorMsg;
  };

  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map(x => {
      let refValue = null;
      if (x === 'password' || x === 'confirmPassword') {
        refValue = form[x === 'password' ? 'confirmPassword' : 'password'];
      }
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };

  // handleSubmit = () => {
  //   const { form, formErrors } = this.state;
  //   const errorObj = this.validateForm(form, formErrors, this.validateField);
  //   if (Object.keys(errorObj).length !== 0) {
  //     this.setState({ formErrors: { ...formErrors, ...errorObj } });
  //     return false;
  //   }

  //   console.log('Data: ', form);
  //   let url = 'http://localhost:8000/api/resetPassword';
  //   axios
  //     .post(url, form)
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(err => console.log(err));
  // };
  handleSubmit = () => {
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    }
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('token');
    console.log('token: ', foo);

    let form_data = new FormData();
    form_data.append('email', this.state.form.email);
    form_data.append('resetToken', foo);
    form_data.append('password', this.state.form.password);
    form_data.append('password_confirm', this.state.form.confirmPassword);
    // Display the key/value pairs
    let object = {};
    form_data.forEach(function(value, key) {
      object[key] = value;
    });
    console.log(object);

    let url = 'http://localhost:8000/api/resetPassword';

    axios
      .post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { form, formErrors } = this.state;
    return (
      <div className="wrap">
        <div className="pass-reset-form">
          <div className="form-header">
            <h3 className="login-heading">Change Password </h3>
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email Password*"
              name="email"
              value={form.email}
              onChange={this.handleChange}
              onBlur={this.handleChange}
            />
            {formErrors.email && (
              <span className="err">{formErrors.email}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="New Password*"
              value={form.password}
              onChange={this.handleChange}
              onBlur={this.handleChange}
            />
            {formErrors.password && (
              <span className="err">{formErrors.password}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              placeholder="Confirm Password*"
              value={form.confirmPassword}
              onChange={this.handleChange}
              onBlur={this.handleChange}
            />
            {formErrors.confirmPassword && (
              <span className="err">{formErrors.confirmPassword}</span>
            )}
          </div>
          {/* <div className="form-group">
            <input
              type="submit"
              className="btnRegister"
              value="Register"
              onClick={this.handleSubmit}
            />
          </div> */}
          <div className="form-group">
            <button
              className="btn btn-lg btn-success btn-block"
              type="submit"
              onClick={this.handleSubmit}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ForgotPassword;
