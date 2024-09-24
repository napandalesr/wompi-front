import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../pages/Product";
import Car from "../pages/Car";

const Router: React.FC = () => {
  return <>
  <Routes>
    <Route path="/" element={<Product/>}/>
    <Route path="/cart" element={<Car/>}/>
  </Routes>
  </>;
};

export default Router;