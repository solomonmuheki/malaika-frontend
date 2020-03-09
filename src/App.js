import React from 'react';
import logo from './logo.svg';
import './App.css';
import './mycss/style.css';
import Navigationbar from './components/Navigationbar';
import Navigationmenu from './components/Navigationmenu';
import Banner from './components/Banner';
import Emmergency from './components/Emmergency';

function App() {
  return (
    <div className="App">
      <Navigationmenu />
      <Banner />
      <Emmergency />
    </div>
  );
}

export default App;
