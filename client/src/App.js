import React, { useState } from 'react';
import Navbar from './components/Navbar';
import routes from './config/routes';
import './App.css';
import { UserContext } from './recoil/UserState';
import './styles/bloop.scss';

function App() {

  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={[ userInfo, setUserInfo ]}>
    <div className="App">
      
      <section className="hero is-fullheight is-success has-background-pink second-section">
         
        <div className="hero-body">
          { routes }
        </div>
        <div className="hero-foot">
          <Navbar />
        </div>
      
      </section>
    </div>
    </UserContext.Provider>
  );
}

export default App;