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
import Dashboard from './views/Dashboard';

import Notifications from './views/Notifications.jsx';
import Icons from './views/Icons.jsx';
import Typography from './views/Typography.jsx';
import TableList from './views/Tables.jsx';
import Maps from './views/Map.jsx';
import UserPage from './views/User.jsx';
import DoctorsProfile from './views/DoctorsProfile';
import AllDoctors from './views/AllDoctors';
import PatientHomePage from './views/PatientHomePage';
import Consultation from './views/Consultation';
import UpgradeToPro from './views/Upgrade.jsx';
import Admin from './layouts/Admin';
import App from './App';
import Home from './layouts/Home';
// export const routesHome = [
//   {
//     path: '/',
//     component: Admin,
//     exact: true
//   },
//   {
//     path: '/',
//     component: Home
//   },
//   {
//     path: '/admin',
//     component: Admin
//   }
// ];
// export const routesHome = [
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     icon: 'nc-icon nc-bank',
//     component: Dashboard,
//     layout: '/admin'
//   },
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     icon: 'nc-icon nc-bank',
//     component: Dashboard,
//     layout: '/admin'
//   },
//   {
//     path: '/doctors',
//     name: 'Doctors',
//     icon: 'nc-icon nc-bank',
//     component: AllDoctors,
//     layout: '/admin'
//   }
// ];
// export const routesPatient = [
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     icon: 'nc-icon nc-bank',
//     component: Dashboard,
//     layout: '/admin'
//   },
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     icon: 'nc-icon nc-bank',
//     component: Dashboard,
//     layout: '/admin'
//   },
//   {
//     path: '/doctors',
//     name: 'Doctors',
//     icon: 'nc-icon nc-bank',
//     component: AllDoctors,
//     layout: '/admin'
//   }
// ];
var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'nc-icon nc-bank',
    component: Dashboard,
    layout: '/admin'
  },

  {
    path: '/doctors',
    name: 'Doctors',
    icon: 'nc-icon nc-bank',
    component: AllDoctors,
    layout: '/admin'
  },
  {
    path: '/patient',
    name: 'Patient',
    icon: 'nc-icon nc-bank',
    component: PatientHomePage,
    layout: '/admin'
  },
  {
    path: '/doctors_profile',
    name: 'Doctor Profile',
    icon: 'nc-icon nc-spaceship',
    component: DoctorsProfile,
    layout: '/admin'
  },
  {
    path: '/consultation',
    name: 'Consultation',
    icon: 'nc-icon nc-spaceship',
    component: Consultation,
    layout: '/admin'
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: 'nc-icon nc-diamond',
    component: Icons,
    layout: '/admin'
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: 'nc-icon nc-pin-3',
    component: Maps,
    layout: '/admin'
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'nc-icon nc-bell-55',
    component: Notifications,
    layout: '/admin'
  },
  {
    path: '/user-page',
    name: 'User Profile',
    icon: 'nc-icon nc-single-02',
    component: UserPage,
    layout: '/admin'
  },
  {
    path: '/tables',
    name: 'Table List',
    icon: 'nc-icon nc-tile-56',
    component: TableList,
    layout: '/admin'
  },
  {
    path: '/typography',
    name: 'Typography',
    icon: 'nc-icon nc-caps-small',
    component: Typography,
    layout: '/admin'
  },
  {
    pro: true,
    path: '/upgrade',
    name: 'Upgrade to PRO',
    icon: 'nc-icon nc-spaceship',
    component: UpgradeToPro,
    layout: '/admin'
  }
];
export default routes;
