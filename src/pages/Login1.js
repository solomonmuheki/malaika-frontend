import React, { Component } from 'react';
import { login1 } from '../utils/UserFunctions';
import { withRouter } from 'react-router-dom';
class Login1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    login1(user).then(res => {
      console.log(res);
      if (res) {
        console.log(this.props.history);

        this.props.history.push('/patient/dashboard');
      }
    });
    // login1(user)
    //   .then(Response => Response.json())
    //   .then(result => {
    //     console.log(result);
    //     if (result.Status == 'Invalid') {
    //       console.log('invalid');
    //       alert('Invalid User');
    //     } else {
    //       this.props.history.push('/Dashboard');
    //     }
    //   });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">please sign in</h1>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Email Address</label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login1);
