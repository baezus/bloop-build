import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../recoil/UserState';
import '../styles/bloop.scss';

function Navbar() {
  
  const [userInfo, setUserInfo] = useContext(UserContext);

  const logout = () => {
    localStorage.clear();
    setUserInfo(userInfo => ({ signedIn: false, username: '' }));
  }

  return (
    <nav>
      <ul>
        <li className="navLi">
          <Link to="/">home</Link>
        </li>
        <li className="navLi">
          <Link to="/login">login</Link>
        </li>
        <li className="navLi">
          <Link to="/register">register</Link>
        </li>
        <li className="navLi">
          <Link to="/bloop">bloop</Link>
        </li>
        <button className="button" value="Logout" onClick={logout}>
          Logout</button>

      </ul>
    </nav>
  );
}

export default Navbar;