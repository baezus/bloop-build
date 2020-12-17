import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../recoil/UserState';



function Navbar(props) {
  
  const [userInfo, setUserInfo] = useContext(UserContext);

  const logout = () => {
    localStorage.clear();
    setUserInfo(userInfo => ({ signedIn: false, username: '' }));
  }

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
        <button className="button" value="Logout" onClick={logout}>
          Logout</button>

      </ul>
    </nav>
  );
}

export default Navbar;