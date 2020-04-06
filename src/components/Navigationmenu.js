import React from 'react';
//import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  faLinkedin,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

class Navigationmenu extends React.Component {
  render() {
    return (
      <nav className="fixed-top">
        <div className="top-area">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <div className="agileinfo-social-grids">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} size="1x" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faLinkedin} size="1x" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <p className="bold text-right pad-4">
                  <FontAwesomeIcon icon="phone" />
                  +234976766630
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-expand-lg ">
          <a className="navbar-brand" href="#">
            Malaikah
          </a>

          <button
            className="navbar-toggler mr-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon="bars" />
          </button>
          <div
            className="collapse navbar-collapse navbar-right navbar-main-collapse"
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item">
                <form className="form-inline ">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item ">
                <NavLink
                  to="/home"
                  className="nav-link"
                  exact
                  activeStyle={{ color: 'green' }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link"
                  exact
                  activeStyle={{ color: 'green' }}
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/signup"
                  className="nav-link"
                  exact
                  activeStyle={{ color: 'green' }}
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/patient/dashboard"
                  className="nav-link"
                  exact
                  activeStyle={{ color: 'green' }}
                >
                  Patient
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navigationmenu;
