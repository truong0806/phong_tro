import axios from 'axios';
import reducStore from './redux';
import TokenService from './service/token';
import * as actions from './store/action';
const { store, persistor } = reducStore();

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    let accessToken =
      localStorage.getItem('persist:auth') &&
      JSON.parse(localStorage.getItem('persist:auth'))?.accessToken.slice(
        1,
        -1
      );
    config.headers = {
      authorization: accessToken ? `Bearer ${accessToken}` : null,
    };
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
    if (originalConfig.url !== '/auth/login' && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        console.log(
          '🚀 ~ file: setupInterceptors.js:23 ~ refreshToken:',
          TokenService.getLocalRefreshToken()
        );
        try {
          const rs = await instance.post('/auth/refreshtoken', {
            refreshToken: TokenService.getLocalRefreshToken(),
          });
          const { accessToken } = rs.data;
          const { refreshToken } = rs.data;

          dispatch(actions.refreshToken(accessToken, refreshToken));
          TokenService.updateLocalAccessToken(accessToken);

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
