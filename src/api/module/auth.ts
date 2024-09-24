import httpClient from '../httpClient';

const Authentication = async (data: any) => {
  const reponse = await httpClient.post(`${process.env.REACT_APP_API_HOST}/auth/login`, data);
  return reponse.data;
};

const RegisterUser = async (data: any) => {
  const reponse = await httpClient.post(`${process.env.REACT_APP_API_HOST}/auth/register`, data);
  return reponse.data;
};

export {
  Authentication,
  RegisterUser
};