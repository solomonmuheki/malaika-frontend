import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Route,
  Link,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/paper-dashboard.scss?v=1.1.0';
import './assets/demo/demo.css';

import 'perfect-scrollbar/css/perfect-scrollbar.css';
import App from './App';
import Home from './layouts/Home';
import Login from './pages/Login';
import Admin from './layouts/Admin';
import * as serviceWorker from './serviceWorker';
import routes from './routes';
import routesHome from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// const routing = (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
// ReactDOM.render(routing, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//   <Router>
//     {routes.map(({ path, component, exact }, key) => (
//       <Route path={path} component={component} exact={exact} key={key} />
//     ))}
//   </Router>,

//   document.getElementById('root')
// );
// const hist = createBrowserHistory();

// ReactDOM.render(
//   <Router history={hist}>
//     <Switch>
//       <Route exact path="/" render={Home} />
//       <Route path="/home" render={Home} />
//       <Route path="/admin/dashboard" render={props => <Admin {...props} />} />
//       {/* <Redirect to="/admin/dashboard" /> */}
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
serviceWorker.register();
