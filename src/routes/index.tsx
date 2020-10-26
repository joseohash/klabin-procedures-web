import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import CreateOperator from '../pages/CreateOperator';
import Procedures from '../pages/Procedures';

import MyRoute from './MyRoute';

const Routes: React.FC = () => (
  <Switch>
    <MyRoute path="/" exact component={SignIn} />

    <MyRoute path="/dashboard" component={Dashboard} isPrivate />
    <MyRoute path="/register-operator" component={CreateOperator} isPrivate />
    <MyRoute path="/procedures/:subarea_id+" component={Procedures} isPrivate />
  </Switch>
);

export default Routes;
