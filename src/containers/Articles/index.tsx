import React from 'react';

import './styles.less';

const Articles = () => {
  return <section className='article'>
  <section className='article__image'>
    <img src="http://localhost:4000/products/image/1/1.jpg" alt="" />
  </section>
  <section className='article__description'>
    <span className='article__description__name'>Name</span>
    <span>Precio: 1000</span>
    <span>Envio: Gratis</span>
    <span>Total: 1000</span>
  </section>
  <section className='article__buttoms'>
    <span className='btn'>-</span>
    <span>1</span>
    <span className='btn'>+</span>
  </section>

  </section>;
}

export default Articles;