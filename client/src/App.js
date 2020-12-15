import React from 'react';
import Navbar from './components/Navbar';
import routes from './config/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      { routes }
    </div>
  );
}

export default App;