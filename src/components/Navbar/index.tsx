import React from 'react';

import './styles.less';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../redux/reducers/rootReducer';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const productCard = useSelector((state: RootState) => state.car.products);
  return <NavLink to={'/cart'} className='header'>
    <img src='/icons/carrt.png' alt='car'/>
    {
      productCard.length > 0 && <span>{productCard.length}</span>
    }
  </NavLink>;
}

export default Navbar;