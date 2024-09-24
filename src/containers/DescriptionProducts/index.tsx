import React from "react";

import "./styles.less";
import { ProductType } from "../../redux/reducers/productReducer";

interface props {
  dataSource: ProductType
}

const DescriptionProducts: React.FC<props> = ({ dataSource }) => {
  return <>
    <div className="descriptionProduct__new">
      <span className="descriptionProduct__new__text">{dataSource.status}</span>
      <img className="descriptionProduct__new__icon" src="assets/06-heart-icon.png" alt="logo-omni" />
    </div>
    <h3 className="descriptionProduct__name">{dataSource.name}</h3>
    <p className="descriptionProduct__star">
      <img src="assets/07-start-icon.png" alt="logo-omni" />
    </p>
    <div className="descriptionProduct__price">
      <span className="descriptionProduct__price__old">{dataSource.oldPrice}</span>
      <span className="descriptionProduct__price__best">{dataSource.price}</span>
    </div>
    {/*<div className="descriptionProduct__tallas">
      {
        dataSource.tallas.map((item: string): JSX.Element => {
          if (item.includes("#")) {
            return <span key={item} className="selected">{item.replace("#", "")}</span>;
          }
          return <span key={item}>{item}</span>;
        })
      }
    </div>*/}
    <span className="descriptionProduct__cant">
      <span>+</span>1<span>-</span>
    </span>
    <button onClick={() => {}}>Agregar al carrito</button>
    <h4 className="descriptionProduct__subtitle">DESCRIPCIÓN:</h4>
    <p className="descriptionProduct__text">
    {dataSource.description}
    </p>
    <a className="descriptionProduct__readMore" href="#">Leer más</a>
  </>;
};

export default DescriptionProducts;
