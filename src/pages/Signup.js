import React from 'react';

import '../mycss/style.css';
import Banner from '../components/Banner';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import axios from 'axios';
import {
  faEnvelope,
  faKey,
  faBars,
  faPhone,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import { Label } from 'reactstrap';

library.add(faEnvelope, faKey, faBars, faPhone, faAngleRight);

// function Signup() {
//   return (
//     <div className="App">
//       <div className="container register">
//         <div className="row">
//           <div className=" col-md-12 register-right">
//             <div className="toggleBtn">
//               <ul
//                 className="nav nav-tabs nav-justified"
//                 id="myTab"
//                 role="tablist"
//               >
//                 <li className="nav-item">
//                   <a
//                     className="nav-link active"
//                     id="home-tab"
//                     data-toggle="tab"
//                     href="#home"
//                     role="tab"
//                     aria-controls="home"
//                     aria-selected="true"
//                   >
//                     Patient
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     id="profile-tab"
//                     data-toggle="tab"
//                     href="#profile"
//                     role="tab"
//                     aria-controls="profile"
//                     aria-selected="false"
//                   >
//                     Doctor
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             {/* <ul
//               className="nav nav-tabs nav-justified"
//               id="myTab"
//               role="tablist"
//             >
//               <li className="nav-item">
//                 <a
//                   className="nav-link active"
//                   id="home-tab"
//                   data-toggle="tab"
//                   href="#home"
//                   role="tab"
//                   aria-controls="home"
//                   aria-selected="true"
//                 >
//                   Patient
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   id="profile-tab"
//                   data-toggle="tab"
//                   href="#profile"
//                   role="tab"
//                   aria-controls="profile"
//                   aria-selected="false"
//                 >
//                   Doctor
//                 </a>
//               </li>
//             </ul> */}
//             <div className="tab-content" id="myTabContent">
//               <div
//                 class="tab-pane fade show active"
//                 id="home"
//                 role="tabpanel"
//                 aria-labelledby="home-tab"
//               >
//                 <h3 className="register-heading">Register as a Patient</h3>
//                 <div className="row register-form">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         class="form-control"
//                         placeholder="First Name *"
//                         value=""
//                       />
//                     </div>
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Last Name *"
//                         value=""
//                       />
//                     </div>
//                     <div className="form-group">
//                       <input
//                         type="password"
//                         className="form-control"
//                         placeholder="Password *"
//                         value=""
//                       />
//                     </div>
//                     <div className="form-group">
//                       <input
//                         type="password"
//                         className="form-control"
//                         placeholder="Confirm Password *"
//                         value=""
//                       />
//                     </div>
//                     <div className="form-group">
//                       <div class="maxl">
//                         <label class="radio inline">
//                           <input
//                             type="radio"
//                             name="gender"
//                             value="male"
//                             checked
//                           />
//                           <span> Male </span>
//                         </label>
//                         <label class="radio inline">
//                           <input type="radio" name="gender" value="female" />
//                           <span>Female </span>
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div class="form-group">
//                       <input
//                         type="email"
//                         className="form-control"
//                         placeholder="Your Email *"
//                         value=""
//                       />
//                     </div>
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         minlength="10"
//                         maxlength="10"
//                         name="txtEmpPhone"
//                         className="form-control"
//                         placeholder="Your Phone *"
//                         value=""
//                       />
//                     </div>
//                     <div className="form-group">
//                       <select className="form-control">
//                         <option className="hidden" selected disabled>
//                           Please select your Sequrity Question
//                         </option>
//                         <option>What is your Birthdate?</option>
//                         <option>What is Your old Phone Number</option>
//                         <option>What is your Pet Name?</option>
//                       </select>
//                     </div>
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter Your Answer *"
//                         value=""
//                       />
//                     </div>
//                     <input
//                       type="submit"
//                       className="btnRegister"
//                       value="Register"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="tab-pane fade show"
//                 id="profile"
//                 role="tabpanel"
//                 aria-labelledby="profile-tab"
//               >
//                 <h3 className="register-heading">Register as a Doctor</h3>
//                 <div className="row register-form">
//                   <div className="col-md-6">
//                     <div class="form-group">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="First Name *"
//                         value=""
//                       />
//                     </div>
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Last Name *"
//                         value=""
//                       />
//                     </div>
//                     <div className="form-group">
//                       <input
//                         type="email"
//                         className="form-control"
//                         placeholder="Email *"
//                         value=""
//                       />
//                     </div>
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         maxlength="10"
//                         minlength="10"
//                         className="form-control"
//                         placeholder="Phone *"
//                         value=""
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div class="form-group">
//                       <input
//                         type="password"
//                         className="form-control"
//                         placeholder="Password *"
//                         value=""
//                       />
//                     </div>
//                     <div className="form-group">
//                       <input
//                         type="password"
//                         className="form-control"
//                         placeholder="Confirm Password *"
//                         value=""
//                       />
//                     </div>
//                     <div className="form-group">
//                       <select className="form-control">
//                         <option className="hidden" selected disabled>
//                           Please select your Sequrity Question
//                         </option>
//                         <option>What is your Birthdate?</option>
//                         <option>What is Your old Phone Number</option>
//                         <option>What is your Pet Name?</option>
//                       </select>
//                     </div>
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="`Answer *"
//                         value=""
//                       />
//                     </div>
//                     <button className="btnRegister">Register</button>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <Label className="loginLink">
//                   I have an account? <Link to="/login">Log in</Link>
//                 </Label>
//               </div>
//             </div>
//           </div>
//           {/* <div class="col-md-3 register-left">
//             <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
//             <h3>Welcome</h3>
//             <p>You are 30 seconds away from earning your own money!</p>
//             <input type="submit" name="" value="Login" />
//             <br />
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;
class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeUserPassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post('http://localhost:8000/api/register', userObject)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({ name: '', email: '', password: '' });
  }

  render() {
    return (
      <div className="App">
        <div className="container register">
          <div className="row">
            <div className=" col-md-12 register-right">
              <div className="toggleBtn">
                <ul
                  className="nav nav-tabs nav-justified"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Patient
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Doctor
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h3 className="register-heading">Register as a Patient</h3>
                  <form onSubmit={this.onSubmit}>
                    <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="First Name *"
                            value={this.state.name}
                            onChange={this.onChangeUserName}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password *"
                            value={this.state.password}
                            onChange={this.onChangeUserPassword}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <div class="maxl">
                            <label class="radio inline">
                              <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked
                              />
                              <span> Male </span>
                            </label>
                            <label class="radio inline">
                              <input
                                type="radio"
                                name="gender"
                                value="female"
                              />
                              <span>Female </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email *"
                            value={this.state.email}
                            onChange={this.onChangeUserEmail}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            minlength="10"
                            maxlength="10"
                            name="txtEmpPhone"
                            className="form-control"
                            placeholder="Your Phone *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <select className="form-control">
                            <option className="hidden" selected disabled>
                              Please select your Sequrity Question
                            </option>
                            <option>What is your Birthdate?</option>
                            <option>What is Your old Phone Number</option>
                            <option>What is your Pet Name?</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Answer *"
                            value=""
                          />
                        </div>
                        <input
                          type="submit"
                          className="btnRegister"
                          value="Register"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade show"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h3 className="register-heading">Register as a Doctor</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name *"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name *"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email *"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          maxlength="10"
                          minlength="10"
                          className="form-control"
                          placeholder="Phone *"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password *"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password *"
                          value=""
                        />
                      </div>
                      <div className="form-group">
                        <select className="form-control">
                          <option className="hidden" selected disabled>
                            Please select your Sequrity Question
                          </option>
                          <option>What is your Birthdate?</option>
                          <option>What is Your old Phone Number</option>
                          <option>What is your Pet Name?</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="`Answer *"
                          value=""
                        />
                      </div>
                      <button className="btnRegister">Register</button>
                    </div>
                  </div>
                </div>
                <div>
                  <Label className="loginLink">
                    I have an account? <Link to="/login">Log in</Link>
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
