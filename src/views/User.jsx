import React from 'react';
import ReactSelect from 'react-select';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from 'reactstrap';
import axios from 'axios';
class User extends React.Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      form: {
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        gender: null,
        country: null,
        image: null,
        address: '',
        region: '',
        dob: ''
      },
      formErrors: {
        fname: null,
        lname: null,
        email: null,
        mobile: null,
        gender: null,
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

    this.setState({ form: formObj }, () => {
      if (!Object.keys(formErrors).includes(name)) return;
      let formErrorsObj = {};

      this.setState({ formErrors: formErrorsObj });
    });
  };
  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
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
      .put(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/patient/1')
      .then(res => {
        console.log(res.data);

        this.setState(prevState => ({
          form: {
            ...prevState.form,
            fname: res.data[0].fname,
            lname: res.data[0].lname,
            email: res.data[0].email,
            role: res.data[0].role,
            image: res.data[0].image,
            dob: res.data[0].patient.dob,
            mobile: res.data[0].patient.tel,
            gender: res.data[0].patient.gender,
            region: res.data[0].patient.region,
            country: res.data[0].patient.country,
            address: res.data[0].patient.address
          }
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { form, formErrors } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require('../assets/img/damir-bosnjak.jpg')}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={
                          'http://localhost:8000/uploads/' +
                          this.state.form.image
                        }
                      />
                      <h5 className="title">
                        {this.state.form.fname} {this.state.form.lname}
                      </h5>
                    </a>
                    <p className="description">
                      {this.state.form.email}
                      <br />
                      {this.state.form.mobile}
                    </p>
                  </div>
                  <p className="description text-center">
                    {this.state.form.gender}
                    <br />
                    {this.state.form.role} <br />
                    {this.state.form.region}
                    <br />
                    <small>{this.state.form.dob}</small>
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="6" md="6" xs="6">
                        <h5>
                          Region/state <br />
                          <small>{this.state.form.region}</small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="6" md="6" xs="6">
                        <h5>
                          Country <br />
                          <small>{this.state.form.country}</small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Edit Profile</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            disabled
                            type="email"
                            value={form.email}
                            onChange={this.handleChange}
                            onBlur={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            placeholder="Username"
                            type="text"
                            value={form.fname}
                            onChange={this.handleChange}
                            onBlur={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">Last Name</label>
                          <Input
                            placeholder="lastname"
                            type="text"
                            value={form.lname}
                            onChange={this.handleChange}
                            onBlur={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Date of birth</label>
                          <Input
                            placeholder="Company"
                            type="date"
                            value={form.dob}
                            onChange={this.handleChange}
                            onBlur={this.handleChange}
                          />
                          {formErrors.dob && (
                            <span className="err">{formErrors.dob}</span>
                          )}
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Mobile</label>
                          <Input
                            type="text"
                            name="mobile"
                            value={form.mobile}
                            onChange={this.handleChange}
                            onBlur={this.handleChange}
                            onKeyPress={this.validateNumber}
                          />
                          {formErrors.mobile && (
                            <span className="err">{formErrors.mobile}</span>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
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
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <div className="form-group">
                          <label>Country</label>
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
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Region</label>
                          <Input
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
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        {/* <FormGroup> */}
                        <label>Profile Image</label>
                        <Input
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
                        {/* </FormGroup> */}
                        {formErrors.image && (
                          <span className="err">{formErrors.image}</span>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            type="textarea"
                            value={form.address}
                            onChange={this.handleChange}
                            onBlur={this.handleChange}
                          />
                        </FormGroup>
                        {formErrors.address && (
                          <span className="err">{formErrors.address}</span>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick={this.handleSubmit}
                        >
                          Update Profile
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
