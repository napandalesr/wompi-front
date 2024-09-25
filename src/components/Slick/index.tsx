import React, { useEffect } from "react";

import { AnyAction } from 'redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/core'
import 'swiper/react'
import 'swiper/swiper-bundle.min.css';


import "./styles.less";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { ThunkDispatch } from "redux-thunk";
import { getProducts, showProductId } from "../../redux/actions/productActions";
import { useNavigate } from "react-router-dom";

const Slick: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const productRelactions = useSelector((state: RootState) => state.prod.productRelactions);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return <>
  <Swiper
  keyboard
  spaceBetween={3}
  slidesPerView={'auto'}
  scrollbar={{draggable: true}}
  pagination={{ clickable: true }}
  mousewheel
    className={`slick`}
  >
    {
      productRelactions.length > 0 && productRelactions.map((item, i) => <SwiperSlide onClick={()=>{
        dispatch(showProductId(item.id)); 
        navigate('/');
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }} 
      key={i} className="container">
        <img src={`${process.env.REACT_APP_API_HOST}${item.images[0]}`} />
        <p className="text">{item.name}</p>
        <span className="price">${item.price}</span>
      </SwiperSlide>)
    }
  </Swiper>
  </>;
};

export default Slick;
