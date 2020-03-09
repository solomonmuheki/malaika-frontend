import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navigationmenu extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-fixed-top">
          <a className="navbar-brand" href="#">
            Malaikah
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faHome} />
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
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Router>
    );
  }
}
export default Navigationmenu;
