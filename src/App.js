import React from 'react';
import logo from './logo.svg';
import './App.css';
import './mycss/style.css';
import Navigationbar from './components/Navigationbar';
import Navigationmenu from './components/Navigationmenu';
import Banner from './components/Banner';
import Emmergency from './components/Emmergency';
import Footer from './components/Footer';
import Page from './components/Page';
//import { Route, Link, NavLink, Switch } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
import {
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faEnvelope,
  faKey,
  faBars,
  faPhone,
  faAngleRight,
  faCalendarAlt,
  faComment,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import Newsfeed from './components/Newsfeed';

import Home from './layouts/Home';
import Admin from './layouts/Admin';
import Patient from './layouts/Patient';
import Login from './pages/Login';
import Logino from './pages/Login1';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import Form from './views/Form';
// import { patientRoutes } from './routing/patientRoutes';
// import routes from './routes';

library.add(
  faEnvelope,
  faKey,
  faBars,
  faPhone,
  faAngleRight,
  faCalendarAlt,
  faComment,
  faUserFriends
);
const hist = createBrowserHistory();
function App() {
  // const routeComponents = routes.map(({ path, component }, key) => (
  //   <Route exact path={path} component={component} key={key} />
  // ));

  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Navigationmenu />
                <Home />
              </React.Fragment>
            )}
          />
          <Route path="/home" render={() => <Redirect to="/" />} />
          <Route
            path="/login"
            render={props => (
              <React.Fragment>
                <Navigationmenu />
                <Login />
              </React.Fragment>
            )}
          />
          <Route
            path="/login1"
            render={props => (
              <React.Fragment>
                <Navigationmenu />
                <Logino />
              </React.Fragment>
            )}
          />
          <Route
            path="/form"
            render={props => (
              <React.Fragment>
                <Navigationmenu />
                <Form />
              </React.Fragment>
            )}
          />
          <Route
            path="/signup"
            render={props => (
              <React.Fragment>
                <Navigationmenu />
                <Signup />
              </React.Fragment>
            )}
          />
          <Route
            path="/forgot-password"
            render={props => (
              <React.Fragment>
                <Navigationmenu />
                <ForgotPassword />
              </React.Fragment>
            )}
          />
          <Route
            path="/change-Password"
            render={props => (
              <React.Fragment>
                <Navigationmenu />
                <ChangePassword />
              </React.Fragment>
            )}
          />
          <Route path="/patient" render={props => <Patient {...props} />} />

          <Route
            path="/patient"
            render={() => <Redirect to="/patient/dashboard" />}
          />
          <Route path="/admin" render={props => <Admin {...props} />} />
          <Redirect to="/admin/dashboard" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
