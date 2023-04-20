import axios from 'axios';
import { baseURL } from '../config/constants';

const api = axios.create({
  timeout: 10000,
  baseURL,
});

export { api };
