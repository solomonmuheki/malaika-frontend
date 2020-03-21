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
  render() {
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
                  <ul className="list-group">
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
                  </ul>
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
