import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import dis from '../images/disease.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Visible, Hidden } from 'react-grid-system';
import { toast } from 'react-toastify';
import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';
import BarLoader from 'react-spinners/BarLoader';
import RingLoader from 'react-spinners/RingLoader';
import SyncLoader from 'react-spinners/SyncLoader';

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
  TabPane,
} from 'reactstrap';

import axios from 'axios';
import * as moment from 'moment';
class Community extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.addComment = this.addComment.bind(this);
    this.addComment2 = this.addComment2.bind(this);
    this.state = {
      activeTab: '1',
      posts: [],
      isLoading: true,
      errors: null,
      comment: '',
      loading: true,
      postLoading: false,
      loadingPosts: true,
      commentLoading: false,
      community_id: '',
      form: {
        title: '',
        description: '',
        image: null,
      },

      formErrors: {
        title: null,
        description: null,
      },
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  handleChange = (e) => {
    const { name, value, checked } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};

    if (name === 'symptoms') {
      // handle the change event of language field
      if (checked) {
        // push selected value in list
        formObj = { ...form };
        formObj[name].push(value);
      } else {
        // remove unchecked value from the list
        formObj = {
          ...form,
          [name]: form[name].filter((x) => x !== value),
        };
      }
    } else {
      // handle change event except language field
      formObj = {
        ...form,
        [name]: value,
      };
    }
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
      default:
        break;
    }
    return errorMsg;
  };

  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map((x) => {
      let refValue = null;

      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };

  handleSubmit = () => {
    this.setState({ postLoading: true });
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      this.setState({ postLoading: false });
      return false;
    }
    console.log('Data: ', form);
    const user_id = localStorage.getItem('userId');
    const community_id = this.state.community_id;
    console.log('community_id: ' + community_id);
    let form_data = new FormData();
    form_data.append('user_id', user_id);
    form_data.append('community_id', community_id);
    form_data.append('title', this.state.form.title);
    form_data.append('description', this.state.form.description);
    form_data.append('image', this.state.form.image);

    // Display the key/value pairs
    let object = {};
    form_data.forEach(function (value, key) {
      object[key] = value;
    });

    let url = 'http://localhost:8000/api/post';
    axios
      .post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        //window.location.reload(true);
        this.setState({ postLoading: false });

        toast.success(res.data.message);
        this.someMethod();
      })
      .catch((err) => console.log(err));
  };
  someMethod() {
    // Force a render without state change...
    this.forceUpdate();
  }
  getPosts() {
    // We're using axios instead of Fetch
    axios
      .get('http://localhost:8000/api/posts')
      .then((response) => response.data)
      .then((data) => {
        this.setState({ posts: data, isLoading: false });
        console.log(this.state.posts);
      })

      .catch((error) => this.setState({ error, isLoading: false }));
  }
  //looding posts on a particular community
  getCommunityPosts() {
    const { id } = this.props.match.params;
    this.setState({ community_id: id });
    axios
      .get(
        'http://localhost:8000/api/communityPosts/' + this.props.match.params.id
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ posts: data, isLoading: false });
        this.setState({ loadingPosts: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loadingPosts: false });
      });
  }
  getComments() {
    // We're using axios instead of Fetch
    axios
      .get('http://localhost:8000/api/comments/1')
      .then((response) => response.data)
      .then((data) => {
        // this.setState({ posts: data, isLoading: false });
        console.log(this.state.posts);
        this.setState({ loading: false });
      })

      .catch((error) => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    // this.getPosts();
    this.getCommunityPosts();
  }

  handleCommentChange = (evt) => {
    this.setState({ comment: evt.target.value });
  };
  //add  Comment on a post
  addComment = (event) => {
    this.setState({ commentLoading: true });
    const postId = event.target.id;
    const user_id = localStorage.getItem('userId');
    // alert(`Welcome ${comment} id: ${postId}`);
    let form_data = new FormData();
    form_data.append('user_id', user_id);
    form_data.append('comment', this.state.comment);
    form_data.append('post_id', postId);
    // Display the key/value pairs
    let object = {};
    form_data.forEach(function (value, key) {
      object[key] = value;
    });
    let url = 'http://localhost:8000/api/comment';
    axios
      .post(url, form_data, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res.data);
        ReactDOM.findDOMNode(this.refs.comment).value = '';
      })
      .catch((err) => console.log(err));
  };
  addComment2(value) {
    console.log(`${value} clicked`);
    const postId = value;
    const user_id = localStorage.getItem('userId');
    // alert(`Welcome ${comment} id: ${postId}`);
    let form_data = new FormData();
    form_data.append('user_id', user_id);
    form_data.append('comment', this.state.comment);
    form_data.append('post_id', postId);
    // Display the key/value pairs
    let object = {};
    form_data.forEach(function (value, key) {
      object[key] = value;
    });
    let url = 'http://localhost:8000/api/comment';
    axios
      .post(url, form_data, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        this.setState({ commentLoading: false });
        ReactDOM.findDOMNode(this.refs.comment).value = '';
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { form, formErrors } = this.state;
    const { isLoading, posts } = this.state;
    const { comment } = this.state;
    const enabled = comment.length > 0;
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
                        className={{ active: this.state.activeTab === '1' }}
                        onClick={() => {
                          this.toggle('1');
                        }}
                      >
                        Posts
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={{ active: this.state.activeTab === '2' }}
                        onClick={() => {
                          this.toggle('2');
                        }}
                      >
                        Create Posts
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <div className="sweet-loading">
                        <BeatLoader
                          css={override}
                          color={'#36D7B7'}
                          loading={this.state.loadingPosts}
                        />
                      </div>
                      {!isLoading ? (
                        <div className="">
                          {this.state.posts.map((post) => (
                            <div className="media comment-box" key={post.id}>
                              <div className="media-left">
                                <a href="#">
                                  <img
                                    className="img-responsive user-post-photo"
                                    alt="..."
                                    src={
                                      'http://localhost:8000/uploads/' +
                                      post.user.image
                                    }
                                  />
                                </a>
                              </div>
                              <div className="media-body">
                                <div className="media-heading">
                                  <strong>{post.user.fname}</strong>
                                  <strong> {post.user.lname}</strong>
                                </div>

                                <p>
                                  <strong>{post.title}</strong>
                                  <br />
                                  {post.description}
                                </p>
                                <div className="row">
                                  <div className="col-md-6 col-md-offset-2">
                                    <img
                                      className="img-responsive post-img"
                                      alt=" "
                                      src={
                                        'http://localhost:8000/uploads/' +
                                        post.image
                                      }
                                    />
                                  </div>
                                </div>
                                <br />

                                <div className=" text-center">
                                  <div className="well">
                                    <div className="input-group">
                                      <textarea
                                        className="form-control "
                                        name="comment"
                                        ref="comment"
                                        id={post.id}
                                        placeholder="Write your comment here..."
                                        onChange={this.handleCommentChange}
                                      ></textarea>
                                      {/* <button
                                        className="input-group-btn"
                                        id={post.id}
                                        disabled={!enabled}
                                        onClick={this.addComment}
                                      >
                                        <i className="nc-icon nc-send" />
                                      </button> */}
                                      <button
                                        className="input-group-btn"
                                        onClick={() =>
                                          this.addComment2(post.id)
                                        }
                                      >
                                        <i className="nc-icon nc-send" />
                                      </button>
                                    </div>
                                    <div className="sweet-loading">
                                      <SyncLoader
                                        color={'#36D7B7'}
                                        loading={this.state.commentLoading}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <p>
                                  <i className="fas fa-calendar-alt"></i>
                                  <FontAwesomeIcon icon="calendar-alt" />{' '}
                                  {moment(new Date(post.created_at)).format(
                                    'DD-MM-YYYY '
                                  )}
                                  |<i className="icon-comment"></i>
                                  <a
                                    href="#"
                                    data-toggle="collapse"
                                    data-target={'#demo' + post.id}
                                  >
                                    <i>
                                      <FontAwesomeIcon icon="comment" />
                                    </i>
                                    <strong>{post.comment.length}</strong>{' '}
                                    Comments
                                  </a>
                                  <i className="nc-icon nc-calender" />
                                </p>
                                <div id={'demo' + post.id} className="collapse">
                                  <div className="container">
                                    {post.comment.map((subitem, i) => {
                                      return (
                                        <div className="row">
                                          <div
                                            key={subitem.id}
                                            className="media comment-box2 "
                                          >
                                            <div className="media-left">
                                              <a href="#">
                                                <img
                                                  className="img-responsive user-photo2"
                                                  alt=""
                                                  src={
                                                    'http://localhost:8000/uploads/' +
                                                    subitem.user.image
                                                  }
                                                />
                                              </a>
                                            </div>
                                            <div className="media-body">
                                              <div className="media-heading1">
                                                {subitem.comment}

                                                <p>
                                                  By:
                                                  <strong>
                                                    {subitem.user.lname}
                                                  </strong>{' '}
                                                  <strong>
                                                    {subitem.user.fname}
                                                  </strong>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>Loading data...</p>
                      )}
                    </TabPane>
                    <TabPane tabId="2">
                      {this.state.activeTab == 2 ? (
                        <h4>Tab 2 Contents</h4>
                      ) : null}
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                            <h1>Create post</h1>

                            <div className="form-group">
                              <label>Title*</label>
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
                              <label>Description*</label>
                              <textarea
                                rows="1"
                                className="form-control"
                                name="description"
                                value={form.description}
                                onChange={this.handleChange}
                                onBlur={this.handleChange}
                              ></textarea>
                              {formErrors.description && (
                                <span className="err">
                                  {formErrors.description}
                                </span>
                              )}
                            </div>

                            <div className="">
                              <input
                                className="form-control"
                                type="file"
                                name="image"
                                placeholder="upload your profile image *"
                                accept="image/png, image/jpeg"
                                onChange={(e) =>
                                  this.handleChange({
                                    target: {
                                      name: 'image',
                                      value: e.target.files[0],
                                    },
                                  })
                                }
                              />
                            </div>
                            <div className="form-group">
                              <p>
                                <span className="require">*</span> - required
                                fields
                              </p>
                            </div>
                            <div className="sweet-loading">
                              <RingLoader
                                color={'#36D7B7'}
                                loading={this.state.postLoading}
                              />
                            </div>

                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={this.handleSubmit}
                              >
                                Create Post
                              </button>
                            </div>
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
}
const override = css`
  display: block;
  margin: auto;
  border-color: #1abc9c;
`;
export default Community;
