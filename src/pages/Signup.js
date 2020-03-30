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
import FormValidator from '../FormValidator';
library.add(faEnvelope, faKey, faBars, faPhone, faAngleRight);
// export default Signup;
class Signup extends React.Component {
  //
  constructor() {
    super();
    this.state = {
      form: {
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        gender: null,
        // language: [],
        country: null,
        image: null,
        address: '',
        region: '',
        dob: ''
      },
      registerDoctorForm: {
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        qualification: '',
        services: '',
        password: '',
        confirmPassword: '',
        gender: null,
        // language: [],
        country: null,
        image: null,
        address: '',
        region: '',
        dob: ''
      },
      role: 'patient',
      docRole: 'doctor',

      formErrors: {
        fname: null,
        lname: null,
        email: null,
        mobile: null,
        password: null,
        confirmPassword: null,
        gender: null,
        // language: null,
        country: null,
        image: null,
        address: '',
        region: '',
        dob: ''
      },
      docFormErrors: {
        fname: null,
        lname: null,
        email: null,
        mobile: null,
        password: null,
        confirmPassword: null,
        gender: null,
        // language: null,
        qualification: '',
        services: '',
        country: null,
        image: null,
        address: '',
        region: '',
        dob: ''
      }
    };
    this.countryList = [
      { value: 'uganda', label: 'Uganda' },
      { value: 'nigeria', label: 'Nigeria' },
      { value: 'india', label: 'India' },
      { value: 'us', label: 'US' },
      { value: 'australia', label: 'Australia' }
    ];
    this.languageList = [
      { value: 'english', label: 'English' },
      { value: 'hindi', label: 'Hindi' },
      { value: 'spanish', label: 'Spanish' },
      { value: 'arabic', label: 'Arabic' }
    ];
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
  handleDocChange = e => {
    const { name, value, checked } = e.target;
    const { registerDoctorForm, docFormErrors } = this.state;
    let formObj = {};

    if (name === 'language') {
      // handle the change event of language field
      if (checked) {
        // push selected value in list
        formObj = { ...registerDoctorForm };
        formObj[name].push(value);
      } else {
        // remove unchecked value from the list
        formObj = {
          ...registerDoctorForm,
          [name]: registerDoctorForm[name].filter(x => x !== value)
        };
      }
    } else {
      // handle change event except language field
      formObj = {
        ...registerDoctorForm,
        [name]: value
      };
    }
    this.setState({ registerDoctorForm: formObj }, () => {
      if (!Object.keys(docFormErrors).includes(name)) return;
      let formErrorsObj = {};
      if (name === 'password' || name === 'confirmPassword') {
        let refValue = this.state.registerDoctorForm[
          name === 'password' ? 'confirmPassword' : 'password'
        ];
        const errorMsg = this.validateDocField(name, value, refValue);
        formErrorsObj = { ...docFormErrors, [name]: errorMsg };
        if (!errorMsg && refValue) {
          formErrorsObj.confirmPassword = null;
          formErrorsObj.password = null;
        }
      } else {
        const errorMsg = this.validateDocField(
          name,
          name === 'language'
            ? this.state.registerDoctorForm['language']
            : value
        );
        formErrorsObj = { ...docFormErrors, [name]: errorMsg };
      }
      this.setState({ docFormErrors: formErrorsObj });
    });
  };

  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case 'fname':
        if (!value) errorMsg = 'Please enter First Name.';
        break;
      case 'lname':
        if (!value) errorMsg = 'Please enter Last Name.';
        break;
      case 'qualification':
        if (!value) errorMsg = 'Please enter Qualification.';
        break;
      case 'email':
        if (!value) errorMsg = 'Please enter Email.';
        else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        )
          errorMsg = 'Please enter valid Email.';
        break;
      case 'mobile':
        if (!value) errorMsg = 'Please enter Mobile.';
        break;
      case 'country':
        if (!value) errorMsg = 'Please select Country.';
        break;
      case 'image':
        if (!value) errorMsg = 'Please choose image.';
        break;
      case 'gender':
        if (!value) errorMsg = 'Please select Gender.';
        break;
      case 'address':
        if (!value) errorMsg = 'Please enter Address.';
        break;
      case 'dob':
        if (!value) errorMsg = 'Please select Date of Birth.';
        break;
      case 'region':
        if (!value) errorMsg = 'Please enter Region/state.';
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
  validateDocField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case 'fname':
        if (!value) errorMsg = 'Please enter First Name.';
        break;
      case 'lname':
        if (!value) errorMsg = 'Please enter Last Name.';
        break;
      case 'qualification':
        if (!value) errorMsg = 'Please enter Qualification.';
        break;
      case 'services':
        if (!value) errorMsg = 'Please enter Services.';
        break;
      case 'email':
        if (!value) errorMsg = 'Please enter Email.';
        else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        )
          errorMsg = 'Please enter valid Email.';
        break;
      case 'mobile':
        if (!value) errorMsg = 'Please enter Mobile.';
        else if (value.length < 10)
          errorMsg = 'Must be above 10 characters.(e.g 256700136457)';
        break;
      case 'country':
        if (!value) errorMsg = 'Please select Country.';
        break;
      case 'image':
        if (!value) errorMsg = 'Please choose image.';
        break;
      case 'gender':
        if (!value) errorMsg = 'Please select Gender.';
        break;
      case 'address':
        if (!value) errorMsg = 'Please enter Address.';
        break;
      case 'dob':
        if (!value) errorMsg = 'Please select Date of Birth.';
        break;
      case 'region':
        if (!value) errorMsg = 'Please enter Region/state.';
        break;
      case 'password':
        // refValue is the value of Confirm Password field
        if (!value) errorMsg = 'Please enter Password.';
        else if (value.length < 6) {
          errorMsg = 'Must be above 6 characters.';
        } else if (refValue && value !== refValue) {
          errorMsg = 'Password and Confirm Password does not match.';
        }
        break;
      case 'confirmPassword':
        // refValue is the value of Password field
        if (!value) errorMsg = 'Please enter Confirm Password.';
        else if (value.length < 6) {
          errorMsg = 'Must be above 6 characters.';
        } else if (refValue && value !== refValue)
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
  validateDocForm = (registerDoctorForm, docFormErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(docFormErrors).map(x => {
      let refValue = null;
      if (x === 'password' || x === 'confirmPassword') {
        refValue =
          registerDoctorForm[x === 'password' ? 'confirmPassword' : 'password'];
      }
      const msg = validateFunc(x, registerDoctorForm[x], refValue);
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
    let form_data = new FormData();

    form_data.append('fname', this.state.form.fname);
    form_data.append('lname', this.state.form.lname);
    form_data.append('email', this.state.form.email);
    form_data.append('role', this.state.role);
    form_data.append('password', this.state.form.password);
    form_data.append('tel', this.state.form.mobile);
    form_data.append('address', this.state.form.region);
    form_data.append('country', this.state.form.country);
    form_data.append('dob', this.state.form.dob);
    form_data.append('gender', this.state.form.gender);
    form_data.append('region', this.state.form.region);
    form_data.append('address', this.state.form.address);
    form_data.append('image', this.state.form.image);
    // Display the key/value pairs
    let object = {};
    form_data.forEach(function(value, key) {
      object[key] = value;
    });
    console.log(object);
    //let json = JSON.stringify(object);
    //  console.log(json);
    let url = 'http://localhost:8000/api/register';

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

  registerDoctor = () => {
    const { registerDoctorForm, docFormErrors } = this.state;
    const errorObj = this.validateDocForm(
      registerDoctorForm,
      docFormErrors,
      this.validateDocField
    );
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ docFormErrors: { ...docFormErrors, ...errorObj } });
      return false;
    }

    console.log('Data: ', registerDoctorForm);
    let form_data = new FormData();

    form_data.append('fname', this.state.registerDoctorForm.fname);
    form_data.append('lname', this.state.registerDoctorForm.lname);
    form_data.append('email', this.state.registerDoctorForm.email);
    form_data.append('role', this.state.docRole);
    form_data.append('password', this.state.registerDoctorForm.password);
    form_data.append('tel', this.state.registerDoctorForm.mobile);
    form_data.append('address', this.state.registerDoctorForm.region);
    form_data.append('country', this.state.registerDoctorForm.country);
    form_data.append('dob', this.state.registerDoctorForm.dob);
    form_data.append('gender', this.state.registerDoctorForm.gender);
    form_data.append('region', this.state.registerDoctorForm.region);
    form_data.append('address', this.state.registerDoctorForm.address);
    form_data.append(
      'qualification',
      this.state.registerDoctorForm.qualification
    );
    form_data.append('services', this.state.registerDoctorForm.services);
    form_data.append('image', this.state.registerDoctorForm.image);
    // Display the key/value pairs
    let object = {};
    form_data.forEach(function(value, key) {
      object[key] = value;
    });
    console.log(object);
    let url = 'http://localhost:8000/api/register';
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
  // constructor() {
  //   super();

  //   this.validator = new FormValidator([
  //     {
  //       field: 'full_name',
  //       method: 'isEmpty',
  //       validWhen: false,
  //       message: 'Enter full name.'
  //     },
  //     {
  //       field: 'email',
  //       method: 'isEmpty',
  //       validWhen: false,
  //       message: 'Enter your email address.'
  //     },
  //     {
  //       field: 'email',
  //       method: 'isEmail',
  //       validWhen: true,
  //       message: 'Enter valid email address.'
  //     },
  //     {
  //       field: 'phone',
  //       method: 'isEmpty',
  //       validWhen: false,
  //       message: 'Enter a phone number.'
  //     },
  //     {
  //       field: 'phone',
  //       method: 'matches',
  //       args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
  //       validWhen: true,
  //       message: 'Enter valid phone number.'
  //     },
  //     {
  //       field: 'password',
  //       method: 'isEmpty',
  //       validWhen: false,
  //       message: 'Enter password.'
  //     },
  //     {
  //       field: 'password_confirmation',
  //       method: 'isEmpty',
  //       validWhen: false,
  //       message: 'Enter Password confirmation.'
  //     },
  //     {
  //       field: 'password_confirmation',
  //       method: this.passwordMatch, // notice that we are passing a custom function here
  //       validWhen: true,
  //       message: 'Password and password confirmation do not match.'
  //     }
  //   ]);

  //   this.state = {
  //     full_name: '',
  //     email: '',
  //     phone: '',
  //     password: '',
  //     password_confirmation: '',
  //     validation: this.validator.valid()
  //   };
  //   this.submitted = false;
  // }
  // passwordMatch = (confirmation, state) => state.password === confirmation;

  // handleInputChange = event => {
  //   event.preventDefault();

  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };
  // handleFormValidation() {
  //   const { studName, emailId, dob, gender, phoneNumber, city } = this.state;
  //   let formErrors = {};
  //   let formIsValid = true;

  //   //Student name
  //   if (!studName) {
  //     formIsValid = false;
  //     formErrors['studNameErr'] = 'Name is required.';
  //   }

  //   //Email
  //   if (!emailId) {
  //     formIsValid = false;
  //     formErrors['emailIdErr'] = 'Email id is required.';
  //   } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
  //     formIsValid = false;
  //     formErrors['emailIdErr'] = 'Invalid email id.';
  //   }

  //   //DOB
  //   if (!dob) {
  //     formIsValid = false;
  //     formErrors['dobErr'] = 'Date of birth is required.';
  //   } else {
  //     var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
  //     if (!pattern.test(dob)) {
  //       formIsValid = false;
  //       formErrors['dobErr'] = 'Invalid date of birth';
  //     }
  //   }

  //   //Gender
  //   if (gender === '' || gender === 'select') {
  //     formIsValid = false;
  //     formErrors['genderErr'] = 'Select gender.';
  //   }

  //   //Phone number
  //   if (!phoneNumber) {
  //     formIsValid = false;
  //     formErrors['phoneNumberErr'] = 'Phone number is required.';
  //   } else {
  //     var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
  //     if (!mobPattern.test(phoneNumber)) {
  //       formIsValid = false;
  //       formErrors['phoneNumberErr'] = 'Invalid phone number.';
  //     }
  //   }

  //   //City
  //   if (city === '' || city === 'select') {
  //     formIsValid = false;
  //     formErrors['cityErr'] = 'Select city.';
  //   }

  //   this.setState({ formErrors: formErrors });
  //   return formIsValid;
  // }

  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  // onSubmit = e => {
  //   e.preventDefault();

  //   const validation = this.validator.validate(this.state);
  //   this.setState({ validation });
  //   this.submitted = true;

  //   if (validation.isValid) {
  //     //reaches here if form validates successfully...
  //     alert('You have been successfully registered.');
  //     this.setState(this.initialState);
  //   }
  // };
  // onSubmit = e => {
  //   e.preventDefault();

  //   if (formValid(this.state)) {
  //     console.log(this.state);
  //   } else {
  //     console.log('Form is invalid!');
  //   }
  // };

  // formValChange = e => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   let isError = { ...this.state.isError };

  //   switch (name) {
  //     case 'fname':
  //       isError.fname =
  //         value.length < 3 ? 'Atleast 4 characaters required' : '';
  //       break;
  //     case 'email':
  //       isError.email = regExp.test(value) ? '' : 'Email address is invalid';
  //       break;
  //     case 'password':
  //       isError.password =
  //         value.length < 6 ? 'Atleast 6 characaters required' : '';
  //       break;
  //     default:
  //       break;
  //   }

  //   this.setState({
  //     isError,
  //     [name]: value
  //   });
  // };
  // onChangeUserFname(e) {
  //   this.setState({ fname: e.target.value });
  // }
  // onChangeUserLname(e) {
  //   this.setState({ lname: e.target.value });
  // }

  // onChangeUserEmail(e) {
  //   this.setState({ email: e.target.value });
  // }
  // onChangeUserPassword(e) {
  //   this.setState({ password: e.target.value });
  // }
  // onChangeUserDistrict(e) {
  //   this.setState({ district: e.target.value });
  // }
  // onChangeUserTel(e) {
  //   this.setState({ tel: e.target.value });
  // }
  // onChangeHandler = event => {
  //   console.log(event.target.files[0]);
  // };
  // handleChange = e => {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   });
  // };
  // handleImageChange = e => {
  //   this.setState({
  //     image: e.target.files[0]
  //   });
  // };
  // onSubmit(e) {
  //   e.preventDefault();

  //   const userObject = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     password: this.state.password
  //   };

  //   axios
  //     .post('http://localhost:8000/api/register', userObject)
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  //   this.setState({ name: '', email: '', password: '' });
  // }
  // onSubmit = e => {
  //   e.preventDefault();
  //   //console.log(this.state);
  //   let form_data = new FormData();

  //   form_data.append('fname', this.state.fname);
  //   form_data.append('lname', this.state.lname);
  //   form_data.append('email', this.state.email);
  //   form_data.append('role', this.state.role);
  //   form_data.append('password', this.state.password);
  //   form_data.append('tel', this.state.tel);
  //   form_data.append('district', this.state.district);
  //   form_data.append('image', this.state.image);
  //   // Display the key/value pairs
  //   let object = {};
  //   form_data.forEach(function(value, key) {
  //     object[key] = value;
  //   });
  //   console.log(object);
  //   //let json = JSON.stringify(object);
  //   //  console.log(json);
  //   let url = 'http://localhost:8000/api/register';

  //   axios
  //     .post(url, form_data, {
  //       headers: {
  //         'content-type': 'multipart/form-data'
  //       }
  //     })
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(err => console.log(err));
  // };
  render() {
    const { form, formErrors, registerDoctorForm, docFormErrors } = this.state;
    return (
      <div className="App">
        <div className="container register">
          <div className="row">
            <div className=" col-md-12 register-right">
              <div className="toggleBtn">
                <ul
                  className="nav nav-tabs nav-justified"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Patient
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Doctor
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h3 className="register-heading">Register as a Patient</h3>
                  <form onSubmit={this.onSubmit}>
                    {/* <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="studName"
                            value={this.state.studName}
                            onChange={this.handleChange}
                            placeholder="Your name.."
                            className={studNameErr ? ' showError' : ''}
                          />
                          {studNameErr && (
                            <div style={{ color: 'red', paddingBottom: 10 }}>
                              {studNameErr}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name *"
                            value={this.state.lname}
                            onChange={this.onChangeUserLname}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="District/state *"
                            value={this.state.district}
                            onChange={this.onChangeUserDistrict}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password *"
                            value={this.state.password}
                            onChange={this.onChangeUserPassword}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password *"
                            value=""
                          />
                        </div>

                        <div className="form-group">
                          <div className="maxl">
                            <label class="radio inline">
                              <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked
                              />
                              <span> Male </span>
                            </label>
                            <label class="radio inline">
                              <input
                                type="radio"
                                name="gender"
                                value="female"
                              />
                              <span>Female </span>
                            </label>
                            <label className="mr-2">
                              <input
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={this.handleChange}
                              />{' '}
                              Male
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={this.handleChange}
                              />{' '}
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <input
                            type="email"
                            placeholder="Your Email *"
                            name="email"
                            onChange={this.formValChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            minlength="10"
                            maxlength="13"
                            className="form-control"
                            placeholder="Your Phone *"
                            value={this.state.tel}
                            onChange={this.onChangeUserTel}
                          />
                        </div>
                        <div className="form-group">
                          <select className="form-control">
                            <option className="hidden" selected disabled>
                              Please select your Sequrity Question
                            </option>
                            <option>What is your Birthdate?</option>
                            <option>What is Your old Phone Number</option>
                            <option>What is your Pet Name?</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter  your Address *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="date"
                            className="form-control"
                            value=""
                          />
                        </div>

                        <div class="custom-file">
                          <input
                            type="file"
                            id="image"
                            placeholder="upload your profile image *"
                            accept="image/png, image/jpeg"
                            onChange={this.handleImageChange}
                            required
                          />
                        </div>
                        <input
                          type="submit"
                          className="btnRegister"
                          value="Register"
                        />
                      </div>
                    </div> */}
                  </form>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="fname"
                          placeholder="First Name*"
                          value={form.fname}
                          onChange={this.handleChange}
                          onBlur={this.handleChange}
                        />
                        {formErrors.fname && (
                          <span className="err">{formErrors.fname}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="lname"
                          placeholder="Last Name*"
                          value={form.lname}
                          onChange={this.handleChange}
                          onBlur={this.handleChange}
                        />
                        {formErrors.lname && (
                          <span className="err">{formErrors.lname}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="date"
                          name="dob"
                          placeholder="Date of Birth"
                          value={form.dob}
                          onChange={this.handleChange}
                          onBlur={this.handleChange}
                        />
                        {formErrors.dob && (
                          <span className="err">{formErrors.dob}</span>
                        )}
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
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password*"
                          minLength="6"
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
                          className="form-control"
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password*"
                          value={form.confirmPassword}
                          onChange={this.handleChange}
                          onBlur={this.handleChange}
                        />
                        {formErrors.confirmPassword && (
                          <span className="err">
                            {formErrors.confirmPassword}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="mr-3">
                          Gender:<span className="asterisk">*</span>
                        </label>
                        <div className="form-control border-0 p-0 pt-1">
                          <label className="mr-2">
                            <input
                              type="radio"
                              name="gender"
                              value="male"
                              checked={form.gender === 'male'}
                              onChange={this.handleChange}
                            />{' '}
                            Male
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="gender"
                              value="female"
                              checked={form.gender === 'female'}
                              onChange={this.handleChange}
                            />{' '}
                            Female
                          </label>
                        </div>
                        {formErrors.gender && (
                          <span className="err">{formErrors.gender}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Mobile Phone*"
                          name="mobile"
                          value={form.mobile}
                          onChange={this.handleChange}
                          onBlur={this.handleChange}
                          onKeyPress={this.validateNumber}
                        />
                        {formErrors.mobile && (
                          <span className="err">{formErrors.mobile}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <ReactSelect
                          name="country"
                          options={this.countryList}
                          value={this.countryList.find(
                            x => x.value === form.country
                          )}
                          onChange={e =>
                            this.handleChange({
                              target: {
                                name: 'country',
                                value: e.value
                              }
                            })
                          }
                        />
                        {formErrors.country && (
                          <span className="err">{formErrors.country}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="region"
                          placeholder="Region/State*"
                          value={form.region}
                          onChange={this.handleChange}
                          onBlur={this.handleChange}
                        />
                        {formErrors.region && (
                          <span className="err">{formErrors.region}</span>
                        )}
                      </div>

                      <div className="">
                        <input
                          className="form-control"
                          type="file"
                          name="image"
                          placeholder="upload your profile image *"
                          accept="image/png, image/jpeg"
                          onChange={e =>
                            this.handleChange({
                              target: {
                                name: 'image',
                                value: e.target.files[0]
                              }
                            })
                          }
                          required
                        />

                        {formErrors.image && (
                          <span className="err">{formErrors.image}</span>
                        )}
                      </div>
                      <br />
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="address"
                          placeholder="Address*"
                          value={form.address}
                          onChange={this.handleChange}
                          onBlur={this.handleChange}
                        ></textarea>
                        {formErrors.address && (
                          <span className="err">{formErrors.address}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          className="btnRegister"
                          value="Register"
                          onClick={this.handleSubmit}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h3 className="register-heading">Register as a Doctor</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="fname"
                          placeholder="First Name*"
                          value={registerDoctorForm.fname}
                          onChange={this.handleDocChange}
                          onBlur={this.handleDocChange}
                        />
                        {docFormErrors.fname && (
                          <span className="err">{docFormErrors.fname}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="lname"
                          placeholder="Last Name*"
                          value={registerDoctorForm.lname}
                          onChange={this.handleDocChange}
                          onBlur={this.handleDocChange}
                        />
                        {docFormErrors.lname && (
                          <span className="err">{docFormErrors.lname}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="date"
                          name="dob"
                          placeholder="Date of Birth"
                          value={registerDoctorForm.dob}
                          onChange={this.handleDocChange}
                          onBlur={this.handleDocChange}
                        />
                        {docFormErrors.dob && (
                          <span className="err">{docFormErrors.dob}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="email"
                          placeholder="Email*"
                          value={registerDoctorForm.email}
                          onChange={this.handleDocChange}
                          onBlur={this.handleDocChange}
                        />
                        {docFormErrors.email && (
                          <span className="err">{docFormErrors.email}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Mobile Phone*"
                          name="mobile"
                          value={registerDoctorForm.mobile}
                          onChange={this.handleDocChange}
                          onBlur={this.handleDocChange}
                          onKeyPress={this.validateNumber}
                        />
                        {docFormErrors.mobile && (
                          <span className="err">{docFormErrors.mobile}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password*"
                          minLength="6"
                          value={registerDoctorForm.password}
                          onChange={this.handleDocChange}
                          onBlur={this.handleDocChange}
                        />
                        {docFormErrors.password && (
                          <span className="err">{docFormErrors.password}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password*"
                          value={registerDoctorForm.confirmPassword}
                          onChange={this.handleDocChange}
                          onBlur={this.handleDocChange}
                        />
                        {docFormErrors.confirmPassword && (
                          <span className="err">
                            {docFormErrors.confirmPassword}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="mr-3">
                          Gender:<span className="asterisk">*</span>
                        </label>
                        <div className="form-control border-0 p-0 pt-1">
                          <label className="mr-2">
                            <input
                              type="radio"
                              name="gender"
                              value="male"
                              checked={registerDoctorForm.gender === 'male'}
                              onChange={this.handleDocChange}
                            />{' '}
                            Male
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="gender"
                              value="female"
                              checked={registerDoctorForm.gender === 'female'}
                              onChange={this.handleDocChange}
                            />{' '}
                            Female
                          </label>
                        </div>
                        {docFormErrors.gender && (
                          <span className="err">{docFormErrors.gender}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="qualification"
                          placeholder="Qualification/Specialisation*"
                          value={registerDoctorForm.qualification}
                          onChange={this.handleDocChange}
                          onBlur={this.handleDocChange}
                        />
                        {docFormErrors.qualification && (
                          <span className="err">
                            {docFormErrors.qualification}
                          </span>
                        )}
                      </div>
                      <div className="form-group">
                        <ReactSelect
                          name="country"
                          options={this.countryList}
                          value={this.countryList.find(
                            x => x.value === form.country
                          )}
                          onChange={e =>
                            this.handleDocChange({
                              target: {
                                name: 'country',
                                value: e.value
                              }
                            })
                          }
                        />
                        {docFormErrors.country && (
                          <span className="err">{docFormErrors.country}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="region"
                          placeholder="Region/State*"
                          value={registerDoctorForm.region}
                          onChange={this.handleDocChange}
                          onBlur={this.handleDocChange}
                        />
                        {docFormErrors.region && (
                          <span className="err">{docFormErrors.region}</span>
                        )}
                      </div>

                      <div className="">
                        <input
                          className="form-control"
                          type="file"
                          name="image"
                          placeholder="upload your profile image *"
                          accept="image/png, image/jpeg"
                          onChange={e =>
                            this.handleDocChange({
                              target: {
                                name: 'image',
                                value: e.target.files[0]
                              }
                            })
                          }
                          required
                        />

                        {docFormErrors.image && (
                          <span className="err">{docFormErrors.image}</span>
                        )}
                      </div>
                      <br />
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="address"
                          placeholder="Address*"
                          value={registerDoctorForm.address}
                          onChange={this.handleDocChange}
                          onBlur={this.handleDocChange}
                        ></textarea>
                        {docFormErrors.address && (
                          <span className="err">{docFormErrors.address}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="services"
                          placeholder="Services*"
                          value={registerDoctorForm.services}
                          onChange={this.handleDocChange}
                          onBlur={this.handleDocChange}
                        ></textarea>
                        {docFormErrors.services && (
                          <span className="err">{docFormErrors.services}</span>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          className="btnRegister"
                          value="Register as Doctor"
                          onClick={this.registerDoctor}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Label className="loginLink">
                    I have an account? <Link to="/login">Log in</Link>
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
