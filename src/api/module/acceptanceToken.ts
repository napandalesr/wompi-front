import httpClient from '../httpClient';

const acceptanceTokenGet = async () => {
  const reponse = await httpClient.get(`${process.env.REACT_APP_API_HOST}/card/acceptance_token`);
  return reponse.data;
};

export {
  acceptanceTokenGet
};