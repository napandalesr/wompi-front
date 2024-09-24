import { Dispatch } from 'redux';
import { ProductGet, ProductGetId } from '../../api/module/product';

export const getProductById = (id: number) => {
  return async (dispatch: Dispatch) => {
    const reponse = await ProductGetId(id);
    reponse.data.images = reponse.data.images.replace(/'/g, '"');
    reponse.data.images = JSON.parse(reponse.data.images)
    dispatch({ type: 'PRODUCT_ID', payload: reponse.data });
  }
}

export const getProducts = () => {
  return async (dispatch: Dispatch) => {
    const reponse = await ProductGet();
    for (let i = 0; i < reponse.data.length; i++) {
      reponse.data[i].images = reponse.data[i].images.replace(/'/g, '"');
      reponse.data[i].images = JSON.parse(reponse.data[i].images)
    }
    dispatch({ type: 'PRODUCTS', payload: reponse.data });
  }
}

export const showProductId = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: 'SHOW_PRODUCT', payload: id });
    
  }
}