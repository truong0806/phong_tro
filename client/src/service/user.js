import axiosConfig from '../axiosConfig';

export const apiUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/user/getUserCurrent',
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiEditUser = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'post',
        url: '/user/editUserInfo',
        data:  payload ,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
