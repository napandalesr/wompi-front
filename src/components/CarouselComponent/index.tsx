import React from "react";
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.less";

interface props {
  images: string[]
}

const CarouselComponent: React.FC<props> = ({ images }) => {
  return <>
  <Carousel className="carousel">
    {
      images.map((item: string) => <div key={item}><img src={`${process.env.REACT_APP_API_HOST}${item}`}/></div>)
    }
    </Carousel>
  </>;
};

export default CarouselComponent;
