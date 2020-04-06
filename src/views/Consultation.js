import React from 'react';
import ReactSelect from 'react-select';

import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';

class Consultation extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      form: {
        name: '',
        region: '',
        mobile: '',
        reoson: '',
        country: '',
        gender: null,
        symptoms: [],
        sickness_duration: '',
        others: ''
      },

      formErrors: {
        name: null,
        region: null,
        mobile: null,
        reoson: null,
        country: null,
        gender: null
      }
    };
    this.countryList = [
      { value: 'uganda', label: 'Uganda' },
      { value: 'nigeria', label: 'Nigeria' },
      { value: 'india', label: 'India' },
      { value: 'us', label: 'US' },
      { value: 'australia', label: 'Australia' }
    ];
    this.symptomList = [
      { value: 'high temperatures', label: 'High Temperatures' },
      { value: 'flue', label: 'Flue' },
      { value: 'cough', label: 'Cough' },
      { value: 'loss of apentite', label: 'Loss of Apentite' }
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

    if (name === 'symptoms') {
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

      const errorMsg = this.validateField(
        name,
        name === 'symptoms' ? this.state.form['symptoms'] : value
      );
      formErrorsObj = { ...formErrors, [name]: errorMsg };

      this.setState({ formErrors: formErrorsObj });
    });
  };

  validateField = (name, value, refValue) => {
    let errorMsg = null;

    switch (name) {
      case 'name':
        if (!value) errorMsg = 'Please enter Name.';
        break;
      case 'reoson':
        if (!value) errorMsg = 'Please enter reoson.';
        break;
      case 'mobile':
        if (!value) errorMsg = 'Please enter Mobile.';
        break;
      case 'country':
        if (!value) errorMsg = 'Please select Country.';
        break;
      case 'region':
        if (!value) errorMsg = 'Please select Region.';
        break;
      case 'gender':
        if (!value) errorMsg = 'Please select Gender.';
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
    let form_data = new FormData();

    form_data.append('name', this.state.form.name);
    form_data.append('region', this.state.form.region);
    form_data.append('mobile', this.state.form.mobile);
    form_data.append('reoson', this.state.form.reoson);
    form_data.append('country', this.state.form.country);
    form_data.append('gender', this.state.form.gender);
    form_data.append('symptoms', this.state.form.symptoms);
    form_data.append('sickness_duration', this.state.form.sickness_duration);
    form_data.append('others', this.state.form.others);

    // Display the key/value pairs
    let object = {};
    form_data.forEach(function(value, key) {
      object[key] = value;
    });
    console.log(object);

    let url = 'http://localhost:8000/api/consultation';

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
      <div className="content">
        <Card>
          <CardHeader>
            <h5 className="title">Please fill this form</h5>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="6">
                <div className="form-group ">
                  <p className="labelQns">What is your name (Full Name)?</p>
                  <input
                    type="text"
                    className="form-control border1"
                    name="name"
                    value={form.name}
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  />
                  {formErrors.name && (
                    <span className="err">{formErrors.name}</span>
                  )}
                </div>
                <div className="form-group">
                  <p className="labelQns">Your Tel Number:</p>
                  <input
                    type="text"
                    className="form-control border1"
                    name="mobile"
                    value={form.mobile}
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  />
                  {formErrors.mobile && (
                    <span className="err">{formErrors.mobile}</span>
                  )}
                </div>
                <div className="form-group">
                  <p className="labelQns">Which district/state are you in?</p>
                  <input
                    type="text"
                    className="form-control border1"
                    name="region"
                    value={form.region}
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  />
                  {formErrors.region && (
                    <span className="err">{formErrors.region}</span>
                  )}
                </div>
                <div className="form-group">
                  <p className="labelQns">
                    Specify Reason For Consultation in Detail?
                  </p>
                  <input
                    type="text"
                    className="form-control border1"
                    name="reoson"
                    value={form.reoson}
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  />
                  {formErrors.reoson && (
                    <span className="err">{formErrors.reoson}</span>
                  )}
                </div>
                <div className="form-group">
                  <p className="labelQns">Which country are you in?</p>
                  <input
                    type="text"
                    className="form-control border1"
                    name="country"
                    value={form.country}
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  />
                  {formErrors.country && (
                    <span className="err">{formErrors.country}</span>
                  )}
                </div>
                <div className="form-group">
                  <p className="labelQns">What is your gender?</p>
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
                    />
                    Female
                  </label>
                  {formErrors.gender && (
                    <span className="err">{formErrors.gender}</span>
                  )}
                </div>

                <div className="form-group">
                  <p className="labelQns">Select the symptoms you have?</p>

                  <div className="form-control border-0 p-0 pt-1">
                    {this.symptomList.map((x, i) => {
                      return (
                        <p key={i} className="mr-3">
                          <input
                            type="checkbox"
                            name="symptoms"
                            value={x.value}
                            checked={form.symptoms.includes(x.value)}
                            onChange={this.handleChange}
                          />
                          {x.label}
                        </p>
                      );
                    })}
                    <br />
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="form-group">
                  <p className="labelQns">How long have you been sick?</p>
                  <input
                    type="text"
                    className="form-control border1"
                    name="sickness_duration"
                    value={form.sickness_duration}
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <p className="labelQns">
                    Anything you would what to tell us?
                  </p>
                  <textarea
                    className="form-control textareabd border1"
                    rows="2"
                    name="others"
                    value={form.others}
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  ></textarea>
                </div>
                <div className="sweet-loading">
                  <ClipLoader color={'#36D7B7'} loading={this.state.loading} />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btnRegister"
                    value="Submit Form"
                    onClick={this.handleSubmit}
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Consultation;
