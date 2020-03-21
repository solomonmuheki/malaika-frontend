/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from 'react';
// react plugin used to create charts
import { Line, Pie } from 'react-chartjs-2';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap';
export default function DoctorsProfile(props) {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Doctors Profile</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="row">
                <div className="col-md-6">
                  <div className="profile-img">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        width="50%"
                        src={require('../assets/img/mike.jpg')}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 align ">
                  <div className="txt ">
                    Name:
                    <strong>Dr spacer Bannes</strong>
                  </div>
                  <div className="txt">
                    Education:
                    <strong>Dr spacer Bannes</strong>
                  </div>
                  <div className="txt">
                    Nationality:
                    <strong>MBBS</strong>
                  </div>
                  <div className="txt">
                    Speciality:
                    <strong>Gaenacolgists</strong>
                  </div>
                  <div className="txt">
                    Language:
                    <strong>speaks English</strong>
                  </div>

                  <div className="col-md-12">
                    <ul className="social-network social-circle">
                      <li>
                        <a href="#" className="icoFacebook" title="Facebook">
                          <i className="fa fa-facebook">f</i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icoTwitter" title="Twitter">
                          <i className="fa fa-twitter"></i>t
                        </a>
                      </li>

                      <li>
                        <a href="#" className="icoLinkedin" title="Linkedin">
                          <i className="fa fa-linkedin">l</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button className="btn btn-success lg">
                    Request For A Doctor
                  </button>
                </div>
              </div>

              <hr />
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={activeTab == '1' ? 'active' : ''}
                      onClick={() => setActiveTab('1')}
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab == '2' ? 'active' : ''}
                      onClick={() => setActiveTab('2')}
                    >
                      Location
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab == '3' ? 'active' : ''}
                      onClick={() => setActiveTab('3')}
                    >
                      Review
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div className="txt ">
                      Name:
                      <strong>Dr spacer Bannes</strong>
                    </div>
                    <div className="txt">
                      Education:
                      <strong>Dr spacer Bannes</strong>
                    </div>
                    <div className="txt">
                      Nationality:
                      <strong>MBBS</strong>
                    </div>
                    <div className="txt">
                      Speciality:
                      <strong>Gaenacolgists</strong>
                    </div>
                    <div className="txt">
                      Language:
                      <strong>speaks English</strong>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <h6>P O BOX 4500 ACACIA AVENUE</h6>
                    <h6>KAMPALA UGANDA</h6>
                  </TabPane>
                  <TabPane tabId="3">
                    <h1>Customer Reviews</h1>

                    <div className="row-fluid">
                      <div className="col-sm-6">
                        <div className="panel panel-default">
                          <div className="panel-body" itemprop="reviewBody">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Nihil quaerat aperiam unde nemo
                              suscipit id repellendus ad doloribus quae, fugiat
                              quia rem molestias sequi, amet nisi qui cumque
                              iusto earum!
                            </p>

                            <span itemprop="name">-- J. Reviewer</span>

                            <span
                              className="glyphicon glyphicon-calendar"
                              aria-hidden="true"
                            ></span>

                            <span className="pull-right">
                              <span className="reviewRating">
                                <span itemprop="ratingValue">5</span> /
                                <span itemprop="bestRating"> stars </span>
                              </span>
                              <span
                                className="glyphicon glyphicon-star"
                                aria-hidden="true"
                              ></span>
                              <span
                                className="glyphicon glyphicon-star"
                                aria-hidden="true"
                              ></span>
                              <span
                                className="glyphicon glyphicon-star"
                                aria-hidden="true"
                              ></span>
                              <span
                                className="glyphicon glyphicon-star"
                                aria-hidden="true"
                              ></span>
                              <span
                                className="glyphicon glyphicon-star"
                                aria-hidden="true"
                              ></span>
                            </span>
                          </div>
                          <div className="panel-footer clearfix">
                            <div className="col-sm-1">
                              <i class="fa fa-facebook-official fa-2x"></i>
                            </div>
                            <div className="col-sm-1">
                              <i class="fa fa-twitter-square fa-2x"></i>
                            </div>
                            <div className="col-sm-1">
                              <i class="fa fa-google-plus fa-2x"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6"></div>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </CardBody>
            <CardFooter>
              <hr />
              <div className="stats">
                <i className="fa fa-history" /> Updated 3 minutes ago
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
