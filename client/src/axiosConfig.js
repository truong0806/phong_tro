import axios from 'axios';
import reducStore from './redux';
import TokenService from './service/token';
import * as actions from './store/action';
import { path } from './ultils/constains';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const { store } = reducStore();

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = TokenService.getLocalAccessToken();
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
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
    console.log(
      '🚀 ~ file: axiosConfig.js:33 ~ originalConfig:',
      originalConfig
    );
    if (originalConfig?.url !== '/auth/login' && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = TokenService.getLocalRefreshToken();
          const response = await instance.post('auth/refreshtoken', {
            refreshTokens: rs,
          });
          if (response.data.err === 1) {
            dispatch(actions.logout(rs));
            Swal.fire(
              'Oop !',
              'Phiên đăng nhập đã hết hạn, hãy đăng nhập lại',
              'info'
            ).then(() => {
              dispatch(actions.clearMsg());
              dispatch(actions.logout(rs));
              window.location.href = '/auth/login';
            });
          }
          dispatch(actions.setAuthTokens(response.data.accessToken, rs));

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
