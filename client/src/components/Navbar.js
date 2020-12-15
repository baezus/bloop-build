import React from 'react';
import { Link } from 'react-router-dom';

function logout() {
  // setUser(null);
  localStorage.clear();
}

function Navbar(props) {
  return (
    <nav>
      <ul>
        <li className="navLi">
          <Link to="/">Home</Link>
        </li>
        <li className="navLi">
          <Link to="/login">Login</Link>
        </li>
        <li className="navLi">
          <Link to="/register">Register</Link>
        </li>
        <button className="button" value="Logout" onClick={logout}/>

      </ul>
    </nav>
  );
}

export default Navbar;