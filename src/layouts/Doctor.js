import React from 'react';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import { Route, Switch } from 'react-router-dom';

import DemoNavbar from '../components/Navbars/DemoNavbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import DoctorSidebar from '../components/Sidebar/PatientSidebar';
//import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";
import FixedPlugin from '../components/FixedPlugin/FixedPlugin';
import Community from '../views/Community';
import DoctorsProfile from '../views/DoctorsProfile';

import doctorRoutes from '../routing/patientRoutes';
import ChangePassword from '../views/ChangePassword.js';

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'black',
      activeColor: 'info'
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
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <div className="wrapper">
        <DoctorSidebar
          {...this.props}
          doctorRoutes={doctorRoutes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoNavbar {...this.props} />
          <Switch>
            {doctorRoutes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}

            <Route path="/patient/community" render={props => <Community />} />
            <Route
              path="/patient/change-password"
              render={props => <ChangePassword />}
            />
            <Route
              path="/patient/doctorprofile"
              render={props => <DoctorsProfile />}
            />
          </Switch>
          <Footer fluid />
        </div>
      </div>
    );
  }
}

export default Dashboard;
