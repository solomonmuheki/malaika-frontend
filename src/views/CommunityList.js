import React from 'react';
import { Table } from 'react-bootstrap';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import CircleLoader from 'react-spinners/CircleLoader';

const apiUrl = 'http://localhost:8000/api';

class CommunityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      communities: [],
      response: {},
      modal: false,
      updateModal: false,
      form: {
        title: '',
        description: '',
        image: null,
      },
      loading: true,
      formErrors: {
        title: null,
        description: null,
        image: null,
      },
      selectedData: {},
      tableData: [
        {
          id: '',
          title: '',
          description: '',
          image: '',
          modalDialog: false,
          modalWithoutAnimation: false,
        },
      ],
      community_id: '',
    };
    this.toggle = this.toggle.bind(this);
    this.updateToggle = this.updateToggle.bind(this);
  }
  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }
  updateToggle() {
    this.setState((prevState) => ({
      updateModal: !prevState.updateModal,
    }));
  }
  getData = (rowData) => {
    // This is the row data from ChildComponent
    console.log(rowData);
    this.updateToggle();
    this.setState({ community_id: rowData.id });
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        title: rowData.title,
        description: rowData.description,
      },
    }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};

    formObj = {
      ...form,
      [name]: value,
    };

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
      case 'image':
        if (!value) errorMsg = 'Please upload community Image.';
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

  deleteCommunity(communityId) {
    const { communities } = this.state;
    axios.delete(apiUrl + '/community/' + communityId).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        communities: communities.filter(
          (community) => community.communityId !== communityId
        ),
      });
    });
  }
  handleSubmit = () => {
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    }

    let form_data = new FormData();

    form_data.append('title', this.state.form.title);
    form_data.append('description', this.state.form.description);
    form_data.append('image', this.state.form.image);

    // Display the key/value pairs
    let object = {};
    form_data.forEach(function (value, key) {
      object[key] = value;
    });
    console.log(object);
    let url = 'http://localhost:8000/api/createCommunity';
    axios
      .post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState(this.state);
        this.setState({ state: this.state });
        this.componentDidMount();
        this.toggle();
      })
      .catch((err) => console.log(err));
  };
  handleUpdateSubmit = () => {
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    }
    let form_data = new FormData();
    form_data.append('title', this.state.form.title);
    form_data.append('description', this.state.form.description);
    form_data.append('image', this.state.form.image);

    // Display the key/value pairs
    let object = {};
    form_data.forEach(function (value, key) {
      object[key] = value;
    });
    console.log(object);
    let url = 'http://localhost:8000/api/community/' + this.state.community_id;
    axios
      .put(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState((prevState) => ({
          form: {
            ...prevState.form,
            title: '',
            description: '',
            image: '',
          },
        }));
        this.updateToggle();
        this.setState(this.state);
        this.setState({ state: this.state });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { error, communities } = this.state;
    const { form, formErrors } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Community List</h5>
                </CardHeader>
                <CardBody>
                  <button className="btn btn-primary" onClick={this.toggle}>
                    Create New Community
                  </button>
                  <Table>
                    <thead className="btn-primary">
                      <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Image</th>

                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {communities.map((community) => (
                        <tr key={community.id} rowData={community}>
                          <td>{community.id}</td>
                          <td>{community.title}</td>
                          <td>{community.description}</td>
                          <td>
                            <img
                              alt="..."
                              className="avatar border-gray"
                              src={
                                'http://localhost:8000/uploads/' +
                                community.image
                              }
                            />
                          </td>

                          <td>
                            <span
                              className="btn btn-primary mr-2"
                              onClick={() => this.getData(community)}
                            >
                              Edit
                            </span>
                            <span
                              className="btn btn-danger mr-2"
                              onClick={this.toggle}
                            >
                              Delete
                            </span>
                            <Button
                              variant="info"
                              onClick={() =>
                                this.props.editCommunity(community.communityId)
                              }
                            >
                              Edit
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => this.deleteCommunity(community.id)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal
            isOpen={this.state.updateModal}
            toggle={this.updateToggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.updateToggle}>Edit Community</ModalHeader>
            <ModalBody>
              <div className="row">
                <div className="col-md-12 col-md-offset-2">
                  <div className="form-group">
                    <label>Community Name*</label>
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
                    <label>Community Description*</label>
                    <textarea
                      rows="1"
                      className="form-control"
                      name="description"
                      value={form.description}
                      onChange={this.handleChange}
                      onBlur={this.handleChange}
                    ></textarea>
                    {formErrors.description && (
                      <span className="err">{formErrors.description}</span>
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
                  <div className="sweet-loading">
                    <CircleLoader
                      color={'#36D7B7'}
                      loading={this.state.loading}
                    />
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleUpdateSubmit}
              >
                Update Community
              </button>
              <Button color="secondary" onClick={this.updateToggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Create New Community</ModalHeader>
            <ModalBody>
              <div className="row">
                <div className="col-md-12 col-md-offset-2">
                  <div className="form-group">
                    <label>Community Name*</label>
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
                    <label>Community Description*</label>
                    <textarea
                      rows="1"
                      className="form-control"
                      name="description"
                      value={form.description}
                      onChange={this.handleChange}
                      onBlur={this.handleChange}
                    ></textarea>
                    {formErrors.description && (
                      <span className="err">{formErrors.description}</span>
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
                    {formErrors.image && (
                      <span className="err">{formErrors.image}</span>
                    )}
                  </div>
                  <div className="sweet-loading">
                    <CircleLoader
                      color={'#36D7B7'}
                      loading={this.state.loading}
                    />
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Create New Community
              </button>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
}

export default CommunityList;
