import httpClient from '../httpClient';

const acceptanceTokenGet = async () => {
  const reponse = await httpClient.get(`${process.env.REACT_APP_API_HOST}/card/acceptance_token`);
  return reponse.data;
};

const paymentPost = async (data: any) => {
  const reponse = await httpClient.post(`${process.env.REACT_APP_API_HOST}/payment`, data);
  return reponse.data;
};

export {
  acceptanceTokenGet,
  paymentPost
};