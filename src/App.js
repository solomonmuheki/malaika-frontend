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
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import Newsfeed from './components/Newsfeed';

import Home from './layouts/Home';
import Admin from './layouts/Admin';
import Login from './pages/Login';
//import { routes } from './routes';
import routes from './routes';

library.add(faEnvelope, faKey, faBars, faPhone, faAngleRight);
const hist = createBrowserHistory();
function App() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
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
            path="/admin/dashboard"
            render={props => <Admin {...props} />}
          />
          {/* <Redirect to="/admin/dashboard" /> */}
        </Switch>
      </div>
    </Router>
    // <Router>
    // <div>
    //   <Navigationmenu />
    /* <Navigationmenu />
        <Banner />
        <Newsfeed />
        <Page />
        <Emmergency />
        <Footer /> */
    /* <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
      </Switch> */

    //   <BrowserRouter>
    //     <div>{routeComponents}</div>
    //   </BrowserRouter>
    // </div>
    // </Router>
  );
}
// const RouteWithSubRoutes = route => (
//   <Route
//     path={route.path}
//     render={props => <route.component {...props} routes={route.routes} />}
//   />
// );
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
export default App;
