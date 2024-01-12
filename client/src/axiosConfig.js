import axios from 'axios';
import reducStore from './redux';
import TokenService from './service/token';
import * as actions from './store/action';
import Swal from 'sweetalert2';
import { path } from './ultils/constains';

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
    if (originalConfig?.url !== '/auth/login' && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = TokenService.getLocalRefreshToken();
          const response = await instance.post('auth/refreshtoken', {
            refreshTokens: rs,
          });
          if (response?.data.err === 1) {
            Swal.fire(
              'Oop !',
              'Phiên đăng nhập đã hết hạn, hãy đăng nhập lại',
              'info'
            ).then(() => {
              dispatch(actions.clearMsgUser());
              dispatch(actions.logout());
              window.location.href = `/${path.LOGIN}`;
            });
          } else {
            dispatch(actions.setAuthTokens(response.data.accessToken, rs));
          }

          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    if (err) {
      if (err.response.status === 404) {
        // Xử lý lỗi 404: chuyển hướng đến trang 404
        window.location.href = '/404'; // Điều hướng đến trang 404
        return null; // Ngăn chặn render component nếu có lỗi 404
      }

      // Xử lý các lỗi khác nếu cần
      return <div>Error: {err.message}</div>;
    }

    return Promise.reject(err);
  }
);
export default instance;
