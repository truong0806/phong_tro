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
