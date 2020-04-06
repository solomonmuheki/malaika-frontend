import React from 'react';
import { css } from '@emotion/core';
import CircleLoader from 'react-spinners/CircleLoader';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';

import axios from 'axios';

class CreateCommunity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        title: '',
        description: '',
        image: null
      },
      loading: true,
      formErrors: {
        title: null,
        description: null,
        image: null
      }
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};

    formObj = {
      ...form,
      [name]: value
    };

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
      case 'title':
        if (!value) errorMsg = 'Please enter title.';
        break;
      case 'description':
        if (!value) errorMsg = 'Please enter description.';
        break;
      case 'image':
        if (!value) errorMsg = 'Please upload community Image.';
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

    let form_data = new FormData();

    form_data.append('title', this.state.form.title);
    form_data.append('description', this.state.form.description);
    form_data.append('image', this.state.form.image);

    // Display the key/value pairs
    let object = {};
    form_data.forEach(function(value, key) {
      object[key] = value;
    });
    console.log(object);
    let url = 'http://localhost:8000/api/createCommunity';
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
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Create Community</h5>
              </CardHeader>
              <CardBody>
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                      <div className="form-group">
                        <label>Community Name*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          value={form.title}
                          onChange={this.handleChange}
                          onBlur={this.handleChange}
                        />
                        {formErrors.title && (
                          <span className="err">{formErrors.title}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label>Community Description*</label>
                        <textarea
                          rows="1"
                          className="form-control"
                          name="description"
                          value={form.description}
                          onChange={this.handleChange}
                          onBlur={this.handleChange}
                        ></textarea>
                        {formErrors.description && (
                          <span className="err">{formErrors.description}</span>
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
                        />
                        {formErrors.image && (
                          <span className="err">{formErrors.image}</span>
                        )}
                      </div>
                      <div className="sweet-loading">
                        <CircleLoader
                          color={'#36D7B7'}
                          loading={this.state.loading}
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={this.handleSubmit}
                        >
                          Create New Community
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default CreateCommunity;
