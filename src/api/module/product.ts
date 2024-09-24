import httpClient from '../httpClient';

const ProductGet = async () => {
	return await httpClient.get(`${process.env.REACT_APP_API_HOST}/products`);
};

const ProductGetId = async (id: number) => {
	return await httpClient.get(`${process.env.REACT_APP_API_HOST}/products/${id}`);
};

export {
  ProductGet,
  ProductGetId
};