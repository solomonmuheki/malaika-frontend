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
import React from 'react';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import { Route, Switch } from 'react-router-dom';

import DemoNavbar from '../components/Navbars/DemoNavbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import PatientSidebar from '../components/Sidebar/PatientSidebar';
//import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";
import FixedPlugin from '../components/FixedPlugin/FixedPlugin';
import Community from '../views/Community';
import DoctorsProfile from '../views/DoctorsProfile';

import patientRoutes from '../routing/patientRoutes';
import ChangePassword from '../views/ChangePassword.js';

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'black',
      activeColor: 'info',
    };
    this.mainPanel = React.createRef();
  }
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle('perfect-scrollbar-on');
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
      document.body.classList.toggle('perfect-scrollbar-on');
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === 'PUSH') {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleActiveClick = (color) => {
    this.setState({ activeColor: color });
  };
  handleBgClick = (color) => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <div className="wrapper">
        <PatientSidebar
          {...this.props}
          patientRoutes={patientRoutes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoNavbar {...this.props} />
          <Switch>
            {patientRoutes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}

            {/* <Route
              path="/patient/community/:id"
              render={(props) => <Community />}
            /> */}
            <Route
              path="/patient/change-password"
              render={(props) => <ChangePassword />}
            />
            <Route
              path="/patient/community/:id"
              render={(props) => <Community {...props} />}
            />
            <Route
              path="/patient/doctorprofile"
              render={(props) => <DoctorsProfile />}
            />
          </Switch>
          <Footer fluid />
        </div>
        {/* <FixedPlugin
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
          handleActiveClick={this.handleActiveClick}
          handleBgClick={this.handleBgClick}
        /> */}
      </div>
    );
  }
}

export default Dashboard;
