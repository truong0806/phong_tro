import axiosConfig from '../axiosConfig';

export const apiUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/user/getUserCurrent',
      });
      console.log("🚀 ~ file: user.js:10 ~ newPromise ~ response:", response)
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiChangePhoneNumber = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'post',
        url: '/user/changephonenumber',
        data:  payload ,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiEditUserInfo = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'post',
        url: '/user/edituserinfo',
        data:  payload ,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
