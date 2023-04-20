import axios from 'axios';

const baseURL = 'https://api.staging.aca.so';

const URLRequest = {
  SIGN_UP: '/auth/sign-up',
  LOGIN: '/auth/login',
  CONFIRM_EMAIL: '/auth/confirm-sign-up',
};

const api = axios.create({
  timeout: 10000,
  baseURL,
});

export { api, URLRequest };
