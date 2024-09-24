import React, { useState } from "react";

import "./styles.less";
import { ProductType } from "../../redux/reducers/productReducer";

interface props {
  dataSource: ProductType
}

const DescriptionProducts: React.FC<props> = ({ dataSource }) => {
  const [countSelected, setCountSelected] = useState(1);

 const add = () => {
  if(countSelected === dataSource.count) {
    return;
  }
  setCountSelected(countSelected+1);
 }

 const remove = () => {
  if(countSelected === 1) {
    return;
  }
  setCountSelected(countSelected-1);
 }

  return <section className="descriptionProduct">
    <div className="descriptionProduct__new">
      <span className="descriptionProduct__new__text">{dataSource.count} {dataSource.status}</span>
    </div>
    <h3 className="descriptionProduct__name">{dataSource.name}</h3>
    <div className="descriptionProduct__price">
      <span className="descriptionProduct__price__old">{dataSource.oldPrice}</span>
      <span className="descriptionProduct__price__best">{dataSource.price}</span>
    </div>
    <span className="descriptionProduct__cant">
      <span onClick={remove}>-</span>{countSelected}<span onClick={add}>+</span>
    </span>
    <button onClick={() => {}}>Agregar al carrito</button>
    <h4 className="descriptionProduct__subtitle">DESCRIPCIÓN:</h4>
    <p className="descriptionProduct__text">
    {dataSource.description}
    </p>
  </section>;
};

export default DescriptionProducts;
