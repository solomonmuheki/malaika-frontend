import Dashboard from '../views/Dashboard';
import Notifications from '../views/Notifications.jsx';
import UserPage from '../views/User.jsx';
import DoctorsProfile from '../views/DoctorsProfile';
import AllDoctors from '../views/AllDoctors';
import PatientHomePage from '../views/PatientHomePage';
import Consultation from '../views/Consultation';
import Communities from '../views/Communities';
import Community from '../views/Community';

const patientRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'nc-icon nc-bank',
    component: PatientHomePage,
    layout: '/patient'
  },
  {
    path: '/doctors',
    name: 'Doctors',
    icon: 'nc-icon nc-circle-10',
    component: AllDoctors,
    layout: '/patient'
  },
  {
    path: '/consultation',
    name: 'Consultation',
    icon: 'nc-icon nc-spaceship',
    component: Consultation,
    layout: '/patient'
  },
  {
    path: '/communities',
    name: 'Communities',
    icon: 'nc-icon nc-support-17',
    component: Communities,
    layout: '/patient'
  },

  {
    path: '/user-page',
    name: 'User Profile',
    icon: 'nc-icon nc-single-02',
    component: UserPage,
    layout: '/patient'
  }
];
export default patientRoutes;
