import React, { useEffect, useState } from 'react';
import Articles from '../../containers/Articles';
import Navbar from '../../components/Navbar';

import './styles.less';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import Modal from '../../containers/Modal';
import { acceptanceTokenGet } from '../../api/module/acceptanceToken';
import { paymentPost } from '../../api/module/payment';
import Slick from '../../components/Slick';
import Spinner from '../../components/Spinner';
import { UpdateProduct } from '../../api/module/product';

const Car: React.FC = () => {
  const productsCart = useSelector((state: RootState) => state.car.products);
  const productRelactions = useSelector((state: RootState) => state.prod.productRelactions);
  const loading = useSelector((state: RootState) => state.load.load);
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
      amount_in_cents: ""+total,
      currency: "COP",
      customer_email: "napandalesr@gmail.com",
      acceptance_token: sessionStorage.getItem('acceptance_token'),
      payment_method: {
        type: "CARD",
        token: token,
        installments: 1
      },
    });

    await updateCounts();

    return postPayment.data;
  }

  const updateCounts = async() => {
    productRelactions.forEach(async item => {
      const seacrh = productsCart.filter(prod => prod.idProduct === item.id);
      if(seacrh.length > 0) {
        await UpdateProduct({...item, count: item.count - seacrh[0].count, images: JSON.stringify(item.images).replace(/"/g, "'")});
      }
    })
  }

  return <main>
    <Navbar/>
    <h2 style={{padding: '10px', borderBottom: '1px solid '}}>Carrito</h2>
    {
      productsCart.map((item, i) => <Articles key={i} productId={item.idProduct} count={item.count} updateTotal={updateTotal}/>)
    }
    <section className='pay'>
      <p>Total: ${total} </p><p style={{fontSize: '12px'}}>Mínimo $150.000</p>
      <button disabled={total<150000} style={{opacity: total<150000 ? '.5' : '1'}} onClick={acceptanceToken}>Pagar</button>
    </section>
    {
      showModal && <Modal closeModal={closeModal} paynmet={payment}/>
    }
    
    <div className="other-products">
      <h4 className="other-products__title">TAMBIÉN TE PODRÍA GUSTAR</h4>
      <Slick/>
    </div>
    {
      loading && <Spinner/>
    }
  </main>;
}

export default Car;