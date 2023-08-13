import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    let token =
      localStorage.getItem('persist:auth') &&
      JSON.parse(localStorage.getItem('persist:auth'))?.token.slice(1, -1);
    config.headers = {
      authorization: token ? `Bearer ${token}` : null,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  (error) =>
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Promise.reje
);
export default instance;
