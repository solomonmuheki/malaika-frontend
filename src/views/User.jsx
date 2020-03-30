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

    // this.onChangeFirstName = this.onChangeFirstName.bind(this);
    // this.onChangeLastName = this.onChangeLastName.bind(this);
    // this.onChangeTel = this.onChangeTel.bind(this);
    // this.onChangeDistrict = this.onChangeDistrict.bind(this);
    // this.onChangeImage = this.onChangeImage.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      tel: '',
      district: '',
      image: '',
      form: {
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
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
        password: null,
        confirmPassword: null,
        gender: null,
        // language: null,
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
      case 'fname':
        if (!value) errorMsg = 'Please enter First Name.';
        break;
      case 'lname':
        if (!value) errorMsg = 'Please enter Last Name.';
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

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/patient/1')
      .then(res => {
        console.log(res.data);

        this.setState(prevState => ({
          form: {
            ...prevState.person,

            role: res.data[0].role,
            Address: res.data[0].patient.address,
            tel: res.data[0].patient.tel,

            address: res.data[0].patient.address
          }
        }));
        this.setState({
          firstName: res.data[0].fname,
          lastName: res.data[0].lname,
          email: res.data[0].email
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // onChangeFirstName(e) {
  //   this.setState({ firstName: e.target.value });
  // }
  // onChangeLastName(e) {
  //   this.setState({ lastName: e.target.value });
  // }
  // onChangeEmail(e) {
  //   this.setState({ email: e.target.value });
  // }

  // onChangeRole(e) {
  //   this.setState({ role: e.target.value });
  // }
  // onChangeTel(e) {
  //   this.setState({ tel: e.target.value });
  // }
  // onChangeDistrict(e) {
  //   this.setState({ district: e.target.value });
  // }

  // onChangeImage(e) {
  //   this.setState({ image: e.target.value });
  // }
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

  onSubmit(e) {
    e.preventDefault();

    let form_data = new FormData();

    form_data.append('fname', this.state.firstName);
    form_data.append('lname', this.state.lastName);
    form_data.append('tel', this.state.tel);
    form_data.append('district', this.state.district);
    form_data.append('image', this.state.image);
    // Display the key/value pairs
    let object = {};
    form_data.forEach(function(value, key) {
      object[key] = value;
    });
    console.log(object);
    //let json = JSON.stringify(object);
    //  console.log(json);
    let url = 'http://localhost:8000/api/patient/1';
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
                          'http://localhost:8000/uploads/' + this.state.image
                        }
                      />
                      <h5 className="title">
                        {this.state.firstName} {this.state.lastName}
                      </h5>
                    </a>
                    <p className="description">{this.state.email}</p>
                  </div>
                  <p className="description text-center">
                    "{this.state.tel}
                    <br />
                    {this.state.role} <br />
                    {this.state.district} "
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <h5>
                          12 <br />
                          <small>Files</small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          2GB <br />
                          <small>Used</small>
                        </h5>
                      </Col>
                      <Col className="mr-auto" lg="3">
                        <h5>
                          24,6$ <br />
                          <small>Spent</small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Team Members</CardTitle>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require('../assets/img/faces/ayo-ogunseinde-2.jpg')}
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          DJ Khaled <br />
                          <span className="text-muted">
                            <small>Offline</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require('../assets/img/faces/joe-gardner-2.jpg')}
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          Creative Tim <br />
                          <span className="text-success">
                            <small>Available</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require('../assets/img/faces/clem-onojeghuo-2.jpg')}
                            />
                          </div>
                        </Col>
                        <Col className="col-ms-7" xs="7">
                          Flume <br />
                          <span className="text-danger">
                            <small>Busy</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </CardBody>
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
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            placeholder="Username"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.onChangeFirstName}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">Last Name</label>
                          <Input
                            placeholder="lastname"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.onChangeLastName}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            placeholder="Company"
                            type="text"
                            value={form.confirmPassword}
                            onChange={this.handleChange}
                            onBlur={this.handleChange}
                          />
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
                            defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
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
