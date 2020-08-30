import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

if (process.env.NODE_ENV === 'development') import('./mocked-server.js');

axios.defaults.baseURL = process.env.API_URL;
axios.interceptors.request.use(AxiosLogger.requestLogger);

export const signIn = async ({ email, password }) => {
  try {
    const { data } = await axios.post('/auth/sign-in', { email, password });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data);
  }
};

export const me = async ({ token }) => {
  try {
    const { data } = await axios.post('/auth/me', { token });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data);
  }
};
