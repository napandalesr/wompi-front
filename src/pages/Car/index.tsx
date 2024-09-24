import React, { useEffect, useState } from 'react';
import Articles from '../../containers/Articles';
import Navbar from '../../components/Navbar';

import './styles.less';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import Modal from '../../containers/Modal';

const Car = () => {
  const productsCart = useSelector((state: RootState) => state.car.products);
  const productRelactions = useSelector((state: RootState) => state.prod.productRelactions);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    updateTotal();
  }, [])

  const closeModal = () => {
    setShowModal(false);
  }

  const updateTotal = () => {
    let sum = 0;
    productRelactions.forEach(item => {
      const seacrh = productsCart.filter(prod => prod.idProduct === item.id);
      if(seacrh.length > 0) {
        sum += item.price * seacrh[0].count;
      }
    })
    setTotal(sum);
  };

  return <main>
    <Navbar/>
    <h2 style={{padding: '10px', borderBottom: '1px solid '}}>Carrito</h2>
    {
      productsCart.map((item, i) => <Articles key={i} productId={item.idProduct} count={item.count} updateTotal={updateTotal}/>)
    }
    <section className='pay'>
      <p>Total: ${total}</p>
      <button onClick={(()=> setShowModal(true))}>Pagar</button>
    </section>
    {
      showModal && <Modal closeModal={closeModal}/>
    }
  </main>;
}

export default Car;