import { Dispatch } from 'redux';
import { Authentication } from '../../api/module/auth';

export const login = (credentials: { email: string; password: string }) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fakeApiLogin(credentials);
      window.sessionStorage.setItem('access_token', response.accessToken);
      window.location.reload();
      dispatch({ type: 'LOGIN_SUCCESS', payload: response });
    } catch (error: any) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
};

export const register = (newUser: { email: string; password: string; name: string }) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fakeApiRegister(newUser);
      dispatch({ type: 'REGISTER_SUCCESS', payload: response });
    } catch (error: any) {
      dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
    }
  };
};

// Simulaciones de API
const fakeApiLogin = (credentials: { email: string; password: string }) =>
  new Promise<{ accessToken: string }>((resolve, reject) => {
    if(credentials.email === "" || credentials.password === "") {
      reject(new Error('Llene los campos'));
    }else {
      resolve(Authentication(credentials))
    }
  });

const fakeApiRegister = (newUser: { email: string; password: string; name: string }) =>
  new Promise<{ message: string }>((resolve) => {
    setTimeout(() => {
      resolve({ message: 'User registered successfully' });
    }, 1000);
  });
