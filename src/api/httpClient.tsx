import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_HOST;

if (window.sessionStorage.access_token !== undefined) {
  axios.defaults.headers.common['Authorization'] = `JWT ${window.sessionStorage.access_token}`;
}

export default axios;