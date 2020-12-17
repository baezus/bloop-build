import React, { useState } from 'react';
import Navbar from './components/Navbar';
import routes from './config/routes';
import './App.css';
import { UserContext } from './recoil/UserState';

function App() {

  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={[ userInfo, setUserInfo ]}>
    <div className="App">
      <Navbar />
      { routes }
    </div>
    </UserContext.Provider>
  );
}

export default App;