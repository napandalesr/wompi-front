import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../pages/Product";

const Router: React.FC = () => {
  return <>
  <Routes>
    <Route path="/" element={<Product/>}/>
  </Routes>
  </>;
};

export default Router;