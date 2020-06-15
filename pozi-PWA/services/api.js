import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pozi-app.herokuapp.com',
});

export default api;