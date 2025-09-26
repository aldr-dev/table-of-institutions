import axios from 'axios';

const API_URL = 'https://schooldb.skillline.ru/api';

const axiosApi = axios.create({
  baseURL: API_URL,
});

export default axiosApi;
