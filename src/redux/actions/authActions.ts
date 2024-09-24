import { Dispatch } from 'redux';
import { Authentication, RegisterUser } from '../../api/module/auth';

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

export const register = (newUser: { email: string; password: string; name: string, confirmPassword: string }) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fakeApiRegister(newUser);
      dispatch({ type: 'REGISTER_SUCCESS', payload: response });
    } catch (error: any) {
      dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
    }
  };
};

const fakeApiLogin = (credentials: { email: string; password: string }) =>
  new Promise<{ accessToken: string }>((resolve, reject) => {
    if(credentials.email === "" || credentials.password === "") {
      reject(new Error('Todos los campos son obligatorios'));
    }else {
      resolve(Authentication(credentials))
    }
  });

const fakeApiRegister = (newUser: { email: string; password: string; name: string, confirmPassword: string }) =>
  new Promise<{ message: string }>((resolve, reject) => {
    if(newUser.email === "" || newUser.password === "" || newUser.password === "") {
      reject(new Error('Todos los campos son obligatorios'));
    }else if(newUser.password !== newUser.confirmPassword) {
      reject(new Error('Las contraseñas no son iguales'));
    }else {
      resolve(RegisterUser(newUser));
    }
  });
