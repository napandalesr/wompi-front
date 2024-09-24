import React from 'react';
import Articles from '../../containers/Articles';
import Navbar from '../../components/Navbar';

import './styles.less';

const Car = () => {
  return <main>
    <Navbar/>
    <h2 style={{padding: '10px', borderBottom: '1px solid '}}>Carrito</h2>
    <Articles/>
    <section className='pay'>
      <p>Total: 1000</p>
      <button>Pagar</button>
    </section>
  </main>;
}

export default Car;