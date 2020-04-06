import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';

//import logo from "logo.svg";
import logo from '../../logo.svg';

var ps;

class DoctorSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo">
          <NavLink to="/home" className="simple-text logo-mini" exact>
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </NavLink>

          <NavLink
            to="/home"
            className="simple-text logo-normal  navlink"
            exact
          >
            Malaikah
          </NavLink>
        </div>
        <div className="sidebar-wrapper" ref={this.sidebar}>
          <Nav>
            {this.props.doctorRoutes.map((prop, key) => {
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? ' active-pro' : '')
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p className="navlink">{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default DoctorSidebar;
