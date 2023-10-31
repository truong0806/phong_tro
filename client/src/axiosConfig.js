import axios from 'axios';
import reducStore from './redux';
import TokenService from './service/token';
import * as actions from './store/action';
const { store } = reducStore();

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = TokenService.getLocalAccessToken();
    if (accessToken) {
      config.headers = {
        authorization: accessToken ? `Bearer ${accessToken}` : null,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const { dispatch } = store;
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    console.log("🚀 ~ file: axiosConfig.js:33 ~ originalConfig:", originalConfig)
    if (originalConfig.url !== '/auth/login' && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          dispatch(actions.refreshToken(TokenService.getLocalRefreshToken()));
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);
export default instance;
