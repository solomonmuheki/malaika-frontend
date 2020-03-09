import React from 'react';
import logo from '../logo.svg';

import '../mycss/style.css';

import Navigationmenu from '../components/Navigationmenu';
import Banner from '../components/Banner';
import Emmergency from '../components/Emmergency';
import Footer from '../components/Footer';
import Page from '../components/Page';
import App from '../App';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faEnvelope,
  faKey,
  faBars,
  faPhone,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import Newsfeed from '../components/Newsfeed';
import { Link, Route, Switch } from 'react-router-dom';
import Admin from '../layouts/Admin';

library.add(faEnvelope, faKey, faBars, faPhone, faAngleRight);

function Home() {
  return (
    <div>
      {/* <Navigationmenu /> */}
      <Banner />
      <Newsfeed />
      <Page />
      <Emmergency />
      <Footer />
    </div>
  );
}

export default Home;
