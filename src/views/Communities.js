import React from 'react';
import dis from '../images/disease.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Visible, Hidden } from 'react-grid-system';
import axios from 'axios';

import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';
import {
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
const apiUrl = 'http://localhost:8000/api';
class Communities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      communities: [],
      response: {},
    };
  }
  componentDidMount() {
    axios
      .get(apiUrl + '/communities')
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            communities: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }
  render() {
    const { error, communities } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
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
                    {communities.map((community) => (
                      <div
                        className="col-sm-12 col-md-6 col-lg-3 "
                        key={community.id}
                      >
                        <NavLink
                          to={'/patient/community/' + community.id}
                          exact
                        >
                          <div className="row dis-box">
                            <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3">
                              <div className="pad3">
                                <img
                                  alt="..."
                                  className="img-responsive dis-img"
                                  src={
                                    'http://localhost:8000/uploads/' +
                                    community.image
                                  }
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
                    ))}
                  </div>

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
                  <div className="sweet-loading">
                    <MoonLoader
                      color={'#36D7B7'}
                      loading={this.state.loading}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
  }
}
export default Communities;
