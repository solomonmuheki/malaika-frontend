import React from 'react';
import dis from '../images/disease.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Visible, Hidden } from 'react-grid-system';
import {
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';

class Communities extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Join Community</h5>
              </CardHeader>
              <CardBody>
                <div className="row pad-2">
                  <div className="col-sm-12 col-md-6 col-lg-3 ">
                    <NavLink to="/patient/community" exact>
                      <div className="row dis-box">
                        <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3">
                          <div className="pad3">
                            <img
                              src={dis}
                              className="img-responsive dis-img"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                          <h3 className="myp">
                            Diabetes
                            <Visible xs sm>
                              <span className="float-right">
                                <FontAwesomeIcon icon="angle-right" />
                              </span>
                            </Visible>
                          </h3>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 ">
                    <NavLink to="/patient/community" exact>
                      <div className="row dis-box">
                        <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                          <img
                            src={dis}
                            className="img-responsive dis-img"
                            alt="img"
                          />
                        </div>
                        <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                          <h3 className="myp">
                            Urinary Track Infections
                            <Visible xs sm>
                              <span className="float-right">
                                <FontAwesomeIcon icon="angle-right" />
                              </span>
                            </Visible>
                          </h3>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 ">
                    <NavLink to="/patient/community" exact>
                      <div className="row dis-box">
                        <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                          <img
                            src={dis}
                            className="img-responsive dis-img"
                            alt="img"
                          />
                        </div>
                        <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                          <h3 className="myp">
                            Family Planning
                            <Visible xs sm>
                              <span className="float-right">
                                <FontAwesomeIcon icon="angle-right" />
                              </span>
                            </Visible>
                          </h3>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 ">
                    <NavLink to="/patient/community" exact>
                      <div className="row dis-box">
                        <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                          <img
                            src={dis}
                            className="img-responsive dis-img"
                            alt="img"
                          />
                        </div>
                        <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                          <h3 className="myp">
                            Pregnancy
                            <Visible xs sm>
                              <span className="float-right">
                                <FontAwesomeIcon icon="angle-right" />
                              </span>
                            </Visible>
                          </h3>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
                <div className="row pad-2">
                  <div className="col-sm-12 col-md-6 col-lg-3 ">
                    <div className="row dis-box">
                      <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                        <img
                          src={dis}
                          className="img-responsive dis-img"
                          alt="img"
                        />
                      </div>
                      <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                        <h3 className="myp">
                          Cancer
                          <Visible xs sm>
                            <span className="float-right">
                              <FontAwesomeIcon icon="angle-right" />
                            </span>
                          </Visible>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 ">
                    <div className="row dis-box">
                      <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                        <img
                          src={dis}
                          className="img-responsive dis-img"
                          alt="img"
                        />
                      </div>
                      <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                        <h3 className="myp">
                          Cardiovascular disease
                          <Visible xs sm>
                            <span className="float-right">
                              <FontAwesomeIcon icon="angle-right" />
                            </span>
                          </Visible>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 ">
                    <div className="row dis-box">
                      <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                        <img
                          src={dis}
                          className="img-responsive dis-img"
                          alt="img"
                        />
                      </div>
                      <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                        <h3 className="myp">
                          Corona Virus
                          <Visible xs sm>
                            <span className="float-right">
                              <FontAwesomeIcon icon="angle-right" />
                            </span>
                          </Visible>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3 ">
                    <div className="row dis-box">
                      <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                        <img
                          src={dis}
                          className="img-responsive dis-img"
                          alt="img"
                        />
                      </div>
                      <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                        <h3 className="myp">
                          Corona Virus
                          <Visible xs sm>
                            <span className="float-right">
                              <FontAwesomeIcon icon="angle-right" />
                            </span>
                          </Visible>
                        </h3>
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
export default Communities;
