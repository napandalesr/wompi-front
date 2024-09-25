import { Dispatch } from "redux"

export const loading = (laod: boolean) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: 'LOADING', payload: laod });
  }
}