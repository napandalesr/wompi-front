import { Dispatch } from 'redux';

export const addToCar = (idProduct: number, count: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: 'ADD_TO_CARD', payload: {idProduct, count} });
  }
}

export const updateToCar = (idProduct: number, count: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: 'UPDATE_TO_CARD', payload: {idProduct, count} });
  }
}

export const deleteoCar = (idProduct: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: 'DELETE_TO_CARD', payload: idProduct });
  }
}