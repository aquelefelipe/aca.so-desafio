/* eslint-disable no-param-reassign */
import axios from 'axios';
import { ACCESS_TOKE, baseURL } from '../config/constants';

const api = axios.create({
  timeout: 10000,
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKE);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { api };
