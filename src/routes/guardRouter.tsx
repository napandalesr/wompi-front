import React from 'react';

import { IsLoggedIn } from '../Helpers';
import Router from '.'
import Login from '../pages/Login';



const GuardedRoute = () => {
  return <>
    {
    IsLoggedIn()
      ? <Router/>
      : <Login/>
  }
  </>;
};

export default GuardedRoute;