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
class Chat extends React.Component {
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
                  <div className="container">
                    <h3 className=" text-center">Messaging</h3>
                    <div className="messaging">
                      <div className="inbox_msg">
                        <div className="inbox_people">
                          {/* <div className="headind_srch">
            <div className="recent_heading">
              <h4>Recent</h4>
            </div>
            <div className="srch_bar">
              <div className="stylish-input-group">
                <input type="text" className="search-bar"  placeholder="Search" />
                <span className="input-group-addon">
                <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                </span> </div>
            </div>
          </div> */}
                          {/* <div className="inbox_chat"> */}
                          {/* <div className="chat_list active_chat"> */}
                          {/* <div className="chat_people">
                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div className="chat_ib">
                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div> */}
                          {/* <div className="chat_list"> */}
                          {/* <div className="chat_people">
                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div className="chat_ib">
                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div> */}
                          {/* <div className="chat_list"> */}
                          {/* <div className="chat_people">
                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div className="chat_ib">
                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div> */}
                          {/* <div className="chat_list"> */}
                          {/* <div className="chat_people">
                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div className="chat_ib">
                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div> */}
                          {/* <div className="chat_list"> */}
                          {/* <div className="chat_people">
                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div className="chat_ib">
                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div> */}
                          {/* <div className="chat_list"> */}
                          {/* <div className="chat_people">
                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div className="chat_ib">
                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div> */}
                          {/* <div className="chat_list">
              <div className="chat_people">
                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div className="chat_ib">
                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div>
          </div> */}
                        </div>
                      </div>

                      <div className="mesgs">
                        <div className="msg_history">
                          <div className="incoming_msg">
                            {/* <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>Test which is a new approach to have all
                    solutions</p>
                  <span className="time_date"> 11:01 AM    |    June 9</span></div>
              </div>
            </div> */}
                            {/* <div className="outgoing_msg">
              <div className="sent_msg">
                <p>Test which is a new approach to have all
                  solutions</p>
                <span className="time_date"> 11:01 AM    |    June 9</span> </div>
            </div> */}
                            {/* <div className="incoming_msg"> */}
                            {/* <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>Test, which is a new approach to have</p>
                  <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
              </div>
            </div> */}
                            {/* <div className="outgoing_msg">
              <div className="sent_msg">
                <p>Apollo University, Delhi, India Test</p>
                <span className="time_date"> 11:01 AM    |    Today</span> </div>
            </div> */}
                            {/* <div className="incoming_msg">
              <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>We work directly with our designers and suppliers,
                    and sell direct to you, which means quality, exclusive
                    products, at a price anyone can afford.</p>
                  <span className="time_date"> 11:01 AM    |    Today</span></div>
              </div>
            </div>
          </div> */}
                            {/* <div className="type_msg">
            <div className="input_msg_write">
              <input type="text" className="write_msg" placeholder="Type a message" />
              <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
          </div> */}
                          </div>
                        </div>

                        <p className="text-center top_spac">
                          {' '}
                          Design by{' '}
                          <a target="_blank" href="#">
                            Sunil Rajput
                          </a>
                        </p>
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
export default Chat;
