import React, { useState } from 'react';
import dis from '../images/disease.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Visible, Hidden } from 'react-grid-system';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap';

export default function Community(props) {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h5 className="title">Join Community</h5>
            </CardHeader>
            <CardBody>
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={activeTab == '1' ? 'active' : ''}
                      onClick={() => setActiveTab('1')}
                    >
                      Posts
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab == '2' ? 'active' : ''}
                      onClick={() => setActiveTab('2')}
                    >
                      Create Post
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div className="row">
                      <div className="media comment-box">
                        <div className="media-left">
                          <a href="#">
                            <img
                              className="img-responsive user-photo"
                              alt="..."
                              src={require('../assets/img/doctor.png')}
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">John Doe</h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                          <div className=" text-center">
                            <div className="well">
                              <div className="input-group">
                                <textarea
                                  className="form-control "
                                  placeholder="Write your comment here..."
                                ></textarea>
                                <span
                                  className="input-group-btn"
                                  onclick="addComment()"
                                >
                                  <a
                                    href="#"
                                    className="btn btn-primary btn-sm"
                                  >
                                    <FontAwesomeIcon icon="comment" />
                                    Comment
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p>
                            <i className="fas fa-calendar-alt"></i>
                            <FontAwesomeIcon icon="calendar-alt" /> Sept 16th,
                            2012 | <i classNamesName="icon-comment"></i>
                            <a
                              href="#"
                              data-toggle="collapse"
                              data-target="#demo"
                            >
                              <i>
                                <FontAwesomeIcon icon="comment" />
                              </i>
                              3 Comments
                            </a>
                            <i className="nc-icon nc-calender" />
                          </p>
                          <div id="demo" className="collapse">
                            <div className="container">
                              <div className="row">
                                <div className="media comment-box">
                                  <div className="media-left">
                                    <a href="#">
                                      <img
                                        className="img-responsive user-photo"
                                        alt="..."
                                        src={require('../assets/img/doctor.png')}
                                      />
                                    </a>
                                  </div>
                                  <div className="media-body">
                                    <div className="media-heading1">
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text
                                      <p>
                                        By: <strong>Muheki solomon</strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                          <h1>Create post</h1>

                          <form action="" method="POST">
                            <div className="form-group">
                              <label for="title">
                                Title <span className="require">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="title"
                              />
                            </div>

                            <div className="form-group">
                              <label for="description">Description</label>
                              <textarea
                                rows="5"
                                className="form-control"
                                name="description"
                              ></textarea>
                            </div>

                            <div class="custom-file">
                              <input type="file" class="custom-file-input" />
                              <label class="custom-file-label">
                                Choose file...
                              </label>
                            </div>
                            <div className="form-group">
                              <p>
                                <span className="require">*</span> - required
                                fields
                              </p>
                            </div>

                            <div class="form-group">
                              <button type="submit" class="btn btn-primary">
                                Create
                              </button>
                              <button className="btn btn-default">
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
