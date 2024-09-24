import React from 'react';

import './styles.less';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <NavLink to={'/cart'} className='header'>
    <img src='/icons/carrt.png' alt='car'/>
    <span>1</span>
  </NavLink>;
}

export default Navbar;