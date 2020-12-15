import React, { useState } from 'react';
import axios from 'axios';

const URL = "http://localhost:2737/auth/login";

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameChange = e => setUsername(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()
    axios.post(URL, {
      username,
      password
    }).then((res) => {
      console.log(res);
    }
  )};

  return(
    
    <div>
    <h1 className="title">Login</h1>
    <form action="URL" method="POST" onSubmit={onSubmit}>

      <div className="field">
        <div className="control">
          <label className="label">Username: </label>
            <input className="input" type="text" name="username" onChange={onUsernameChange}/>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Password: </label>
            <input className="input" type="password" name="password" onChange={onPasswordChange}/>
        </div>
      </div>

      <div className="field">
          <label className="label">Submit</label>
          <input type="submit" className="button" name="submit"/>
      </div>
    </form>
  </div>
  )
}

export default Login;