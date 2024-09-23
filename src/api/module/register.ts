import httpClient from '../httpClient';

const RegisterPost = async (data: any) => {
	return await httpClient.post(`${process.env.REACT_APP_API_HOST}/register/`, data);
};
export {
  RegisterPost
};