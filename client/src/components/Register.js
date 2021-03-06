import React, { useState } from 'react';
import AuthModel from '../models/AuthModel';


const Register = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameChange = e => setUsername(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()
    AuthModel.register({
      username,
      password
    }).then((res) => {
      if (Response.status === 201) {
      props.history.push('/register');
      console.log(res);}
    }
  )};

  return(
    
    <div>
    <h1 className="title">Register</h1>
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

export default Register;