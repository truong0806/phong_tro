import axiosConfig from '../axiosConfig';

export const apiSendOtp = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'post',
        url: '/user/sendotp',
        data:  payload ,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });