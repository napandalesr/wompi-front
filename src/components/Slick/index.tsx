import React, { useEffect } from "react";
import Slider from "react-slick";
import { Navigation } from 'swiper/modules';

import { AnyAction } from 'redux';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import "./styles.less";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { ThunkDispatch } from "redux-thunk";
import { getProducts, showProductId } from "../../redux/actions/productActions";

const Slick: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const productRelactions = useSelector((state: RootState) => state.prod.productRelactions);

  useEffect(() => {
    dispatch(getProducts());
  }, []);



  return <>
  <Swiper
  keyboard
  modules={[Navigation]}
  spaceBetween={3}
  slidesPerView={'auto'}
  scrollbar={{draggable: true}}
  navigation
  pagination={{ clickable: true }}
  mousewheel
    className={`slick`}
  >
    {
      productRelactions.length > 0 && productRelactions.map((item, i) => <SwiperSlide onClick={()=>{
        dispatch(showProductId(item.id)); 
        window.scroll({
        top: 0,
        behavior: "smooth",
      });}} key={i} className="container">
        <img src={`${process.env.REACT_APP_API_HOST}${item.images[0]}`} />
        <p className="text">{item.name}</p>
        <span className="price">${item.price}</span>
      </SwiperSlide>)
    }
  </Swiper>
  </>;
};

export default Slick;
