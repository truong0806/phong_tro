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
