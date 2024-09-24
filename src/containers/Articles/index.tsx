import React, { useState } from 'react';

import './styles.less';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { updateToCar } from '../../redux/actions/carActions';

const Articles = (product : { productId: number, count: number, updateTotal: () => void}) => {
  const [countPrd, setCountPrd] = useState<number>(product.count)
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const productCart = useSelector((state: RootState) => state.prod.productRelactions).filter(item => item.id === product.productId)[0];

  return <section className='article'>
  <section className='article__image'>
    <img src={`${process.env.REACT_APP_API_HOST}${productCart.images[0]}`} />
  </section>
  <section className='article__description'>
    <span className='article__description__name'>{productCart.name}</span>
    <span>Precio: {productCart.price}</span>
    <span>Envio: {productCart.shipping}</span>
    <span>Total: $ {productCart.price * product.count}</span>
  </section>
  <section className='article__buttoms'>
    <span onClick={()=>{dispatch(updateToCar(productCart.id, countPrd-1)); setCountPrd(countPrd-1); product.updateTotal()}} className='btn'>-</span>
    <span>{countPrd}</span>
    <span onClick={()=>{dispatch(updateToCar(productCart.id, countPrd+1)); setCountPrd(countPrd+1); product.updateTotal()}} className='btn'>+</span>
  </section>

  </section>;
}

export default Articles;