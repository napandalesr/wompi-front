import React, { useEffect } from 'react';
import DescriptionProducts from '../../containers/DescriptionProducts';
import CarouselComponent from '../../components/CarouselComponent';
import Slick from '../../components/Slick';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../redux/reducers/rootReducer';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../redux/actions/productActions';

const Product = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const productSelected = useSelector((state: RootState) => state.prod.productSelected);

  useEffect(() => {
    dispatch(getProductById(1));
  }, [])

  return <>
  {
    productSelected && <>
    <CarouselComponent images={productSelected.images}/>
    <DescriptionProducts dataSource={productSelected}/>
    </>
  }
  
    <div className="other-products">
      <h4 className="other-products__title">TAMBIÉN TE PODRÍA GUSTAR</h4>
      <Slick/>
    </div>
    </>;
}

export default Product;