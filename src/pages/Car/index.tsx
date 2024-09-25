import React, { useEffect, useState } from 'react';
import Articles from '../../containers/Articles';
import Navbar from '../../components/Navbar';

import './styles.less';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import Modal from '../../containers/Modal';
import { acceptanceTokenGet } from '../../api/module/acceptanceToken';
import { paymentPost } from '../../api/module/payment';

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

  const acceptanceToken = async () => {
    const response = await  acceptanceTokenGet();
    sessionStorage.setItem('acceptance_token', response.acceptance_token);
    sessionStorage.setItem('permalink', response.permalink);
    setShowModal(true);
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

  const payment = async (token:string) => {
    const postPayment = await paymentPost({
      amount_in_cents: "500000000",
      currency: "COP",
      customer_email: "napandalesr@gmail.com",
      acceptance_token: sessionStorage.getItem('acceptance_token'),
      payment_method: {
        type: "CARD",
        token: token,
        installments: 1
      },
    });

    console.log('postPayment', postPayment);
    
  }

  return <main>
    <Navbar/>
    <h2 style={{padding: '10px', borderBottom: '1px solid '}}>Carrito</h2>
    {
      productsCart.map((item, i) => <Articles key={i} productId={item.idProduct} count={item.count} updateTotal={updateTotal}/>)
    }
    <section className='pay'>
      <p>Total: ${total}</p>
      <button onClick={acceptanceToken}>Pagar</button>
    </section>
    {
      showModal && <Modal closeModal={closeModal} paynmet={payment}/>
    }
  </main>;
}

export default Car;