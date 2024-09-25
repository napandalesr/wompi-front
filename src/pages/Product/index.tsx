import React, { useEffect } from 'react';
import DescriptionProducts from '../../containers/DescriptionProducts';
import CarouselComponent from '../../components/CarouselComponent';
import Slick from '../../components/Slick';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../redux/reducers/rootReducer';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../redux/actions/productActions';
import Navbar from '../../components/Navbar';

import './style.less';

const Product = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const productSelected = useSelector((state: RootState) => state.prod.productSelected);
  const productShow = useSelector((state: RootState) => state.prod.showProduct);

  useEffect(() => {
    dispatch(getProductById(productShow));
  }, [productShow]);

  return <main>
    <Navbar/>
  {
    productSelected && <section className='contain'>
    <CarouselComponent images={productSelected.images}/>
    <DescriptionProducts dataSource={productSelected}/>
    </section>
  }
  
    <div className="other-products">
      <h4 className="other-products__title">TAMBIÉN TE PODRÍA GUSTAR</h4>
      <Slick/>
    </div>
    </main>;
}

export default Product;