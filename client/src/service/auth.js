import axiosConfig from '../axiosConfig';

export const apiRegister = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'post',
        url: '/auth/register',
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiMap = (address) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          address
        )}&key=41f3c44d8bae4538955490335c0942f5`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiRefeshToken = (refreshToken) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'post',
        url: '/auth/refreshtoken',
        data: { refreshTokens: refreshToken },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiLogin = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'post',
        url: '/auth/login',
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiLogout = (refreshToken) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'delete',
        url: '/auth/refreshtoken',
        data: { refreshTokens: refreshToken },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiChangePassword = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'post',
        url: '/auth/changepassword',
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
