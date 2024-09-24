import React from "react";

import "./styles.less";
import { ProductType } from "../../redux/reducers/productReducer";

interface props {
  dataSource: ProductType
}

const DescriptionProducts: React.FC<props> = ({ dataSource }) => {
  return <section className="descriptionProduct">
    <div className="descriptionProduct__new">
      <span className="descriptionProduct__new__text">{dataSource.status}</span>
    </div>
    <h3 className="descriptionProduct__name">{dataSource.name}</h3>
    <div className="descriptionProduct__price">
      <span className="descriptionProduct__price__old">{dataSource.oldPrice}</span>
      <span className="descriptionProduct__price__best">{dataSource.price}</span>
    </div>
    <span className="descriptionProduct__cant">
      <span>+</span>1<span>-</span>
    </span>
    <button onClick={() => {}}>Agregar al carrito</button>
    <h4 className="descriptionProduct__subtitle">DESCRIPCIÓN:</h4>
    <p className="descriptionProduct__text">
    {dataSource.description}
    </p>
  </section>;
};

export default DescriptionProducts;
