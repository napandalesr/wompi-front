import { Dispatch } from 'redux';
import { ProductGetId } from '../../api/module/product';

export const getProductById = (id: number) => {
  return async (dispatch: Dispatch) => {
    const reponse = await ProductGetId(id);
    dispatch({ type: 'PRODUCT_ID', payload: reponse });
  }
}