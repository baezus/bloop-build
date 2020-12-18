import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import ShowPage from '../pages/User';
import Bloop from '../components/Bloop';

export default (
  <Switch>
    <Route exact path='/' component={ Bloop } />
    <Route exact path='/bloop' component= { Bloop }/>
    <Route exact path ='/login' component={ Login }/>
    <Route exact path ='/register' component={ Register }/>
    <Route path='/user/:id' component={ ShowPage }/>
  </Switch>
);