import httpClient from '../httpClient';

const registertcard = async (data: any) => {
  return await httpClient.post(`${process.env.REACT_APP_API_HOST}/card`, data);;
};

export {
  registertcard
};