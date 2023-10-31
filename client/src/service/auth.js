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
export const apiRefeshToken = (refreshToken) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log('refreshToken', refreshToken);
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
      console.log('refreshToken', refreshToken);
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
