import React from 'react';
import Doctors from './Doctors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import axios from 'axios';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from 'reactstrap';

class Tables extends React.Component {
  state = {
    users: [],
    isLoading: true,
    errors: null
  };
  getUsers() {
    // We're using axios instead of Fetch
    axios
      // The API we're requesting data from
      .get('http://localhost:8000/api/patients/patient')
      // Once we get a response, we'll map the API endpoints to our props
      // .then(response =>
      //   response.data.results.map(user => ({
      //     fname: `${user.fname} ${user.lname}`,
      //     lname: `${user.lname}`,
      //     email: `${user.email}`
      //     // image: `${user.patient.image}`
      //   }))
      // )
      .then(response => response.data)
      // Let's make sure to change the loading state to display the data
      // .then(users => {
      //   this.setState({
      //     users,
      //     isLoading: false
      //   });
      // })
      .then(data => {
        this.setState({ users: data, isLoading: false });

        console.log(this.state.users);
      })
      // We can still use the `.catch()` method since axios is promise-based
      .catch(error => this.setState({ error, isLoading: false }));
    // axios
    //   .get('http://localhost:8000/api/patients/patient')
    //   .then(response => console.log(response))
    //   .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.getUsers();
  }
  render() {
    const { isLoading, users } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">All Doctors</h5>
                </CardHeader>
                <CardBody>
                  <div class="container">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="input-group custom-search-form">
                          <input type="text" className="form-control" />
                          <span className="input-group-btn">
                            <button className="btn btn-default" type="button">
                              <span className="glyphicon glyphicon-search"></span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <h2>Random User</h2>
                  <div>
                    {!isLoading ? (
                      users.map(user => {
                        const { fname, lname, email, image } = user;
                        return (
                          <div key={fname}>
                            <p>{lname}</p>
                            <div>
                              <img
                                src="http://localhost:8000/uploads/{image}"
                                alt={lname}
                              />
                            </div>
                            <p>{email}</p>
                            <hr />
                          </div>
                        );
                      })
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div> */}
                  {!isLoading ? (
                    <ul>
                      {this.state.users.map(user => (
                        <li className="list-group">
                          <NavLink to="/patient/doctorprofile" exact>
                            <div className="row">
                              <div className="col pad-4">
                                <div className="profile-img">
                                  {/* <img
                                    alt="..."
                                    className="img-responsive doc-img"
                                    src={require('../assets/img/doctor.png')}
                                  /> */}
                                  <img
                                    alt="..."
                                    className="img-responsive doc-img"
                                    src={
                                      'http://localhost:8000/uploads/' +
                                      user.patient.image
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-8 pad-4">
                                <div className="txt">
                                  Name:
                                  <strong>
                                    {' '}
                                    {user.fname} {user.lname}
                                  </strong>
                                </div>
                                <div className="txt">
                                  Location:
                                  <strong> {user.patient.district}</strong>
                                </div>
                                <div className="txt">
                                  Tittle:<strong>Doctor</strong>
                                </div>
                                <div className="txt">
                                  Gender:<strong>Male</strong>
                                </div>
                              </div>
                              <div className="col-1 pad-4">
                                <div className="profile-img">
                                  <FontAwesomeIcon icon="angle-right" />
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Loading data...</p>
                  )}
                  {/* <ul className="list-group">
                    <li className="list-group">
                      <NavLink
                        to="/patient/doctorprofile"
                        className="nav-link"
                        exact
                        activeStyle={{ color: 'green' }}
                      >
                        <div className="row">
                          <div className="col pad-4">
                            <div className="profile-img">
                              <img
                                alt="..."
                                className="img-responsive doc-img"
                                src={require('../assets/img/doctor.png')}
                              />
                            </div>
                          </div>
                          <div className="col-8 pad-4">
                            <div className="txt">
                              Name:<strong> Muheki Solomon</strong>
                            </div>
                            <div className="txt">
                              Location:<strong>Kampala</strong>
                            </div>
                            <div className="txt">
                              Tittle:<strong>Doctor</strong>
                            </div>
                            <div className="txt">
                              Gender:<strong>Male</strong>
                            </div>
                          </div>
                          <div className="col-1 pad-4">
                            <div className="profile-img pad-4">
                              <FontAwesomeIcon icon="angle-right" />
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                    <li className="list-group">
                      <NavLink to="/patient/doctorprofile" exact>
                        <div className="row">
                          <div className="col pad-4">
                            <div className="profile-img">
                              <img
                                alt="..."
                                className="img-responsive doc-img"
                                src={require('../assets/img/doctor.png')}
                              />
                            </div>
                          </div>
                          <div className="col-8 pad-4">
                            <div className="txt">
                              Name:<strong>Muheki Solomon</strong>
                            </div>
                            <div className="txt">
                              Location:<strong>Kampala</strong>
                            </div>
                            <div className="txt">
                              Tittle:<strong>Doctor</strong>
                            </div>
                            <div className="txt">
                              Gender:<strong>Male</strong>
                            </div>
                          </div>
                          <div className="col-1 pad-4">
                            <div className="profile-img">
                              <FontAwesomeIcon icon="angle-right" />
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                    <li className="list-group">
                      <NavLink to="/patient/doctorprofile" exact>
                        <div className="row">
                          <div className="col pad-4">
                            <div className="profile-img ">
                              <img
                                alt="..."
                                className="img-responsive doc-img"
                                src={require('../assets/img/doctor.png')}
                              />
                            </div>
                          </div>
                          <div className="col-8 pad-4">
                            <div className="txt">
                              Name: <strong>Muheki Solomon</strong>
                            </div>
                            <div className="txt">
                              Location: <strong>Kampala</strong>
                            </div>
                            <div className="txt">
                              Tittle: <strong>Doctor</strong>
                            </div>
                            <div className="txt">
                              Gender: <strong>Male</strong>
                            </div>
                          </div>
                          <div className="col-1 pad-4">
                            <div className="profile-img">
                              <FontAwesomeIcon icon="angle-right" />
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                  </ul> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
