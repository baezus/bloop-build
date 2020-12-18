import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../recoil/UserState';
import '../styles/bloop.scss';

function Navbar() {
  
  const [userInfo, setUserInfo] = useContext(UserContext);

  const logout = () => {
    localStorage.clear();
    setUserInfo(userInfo => ({ signedIn: false, username: '' }));
  }

  return (
    <nav className="breadcrumb is-right is-large has-bullet-separator" aria-label="breadcrumbs">
      <ul className="nav-list center">
        <li className="nav-link">
          <NavLink className="footer-link" to="/">home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink className="footer-link" to="/login">login</NavLink>
        </li>
        <li className="nav-link">
          <NavLink className="footer-link" to="/register">register</NavLink>
        </li>
        <li className="nav-link">
          <NavLink className="footer-link" to="/bloop">bloop</NavLink>
        </li>
        <button className="button" value="Logout" onClick={logout}>
          Logout</button>

      </ul>
    </nav>
  );
}

export default Navbar;