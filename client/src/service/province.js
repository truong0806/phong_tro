import axiosConfig from '../axiosConfig';

export const apiProvince = () =>
  new Promise(async (resolve, reject) => {
    try {
      const headers = {
        "Content-Type": "application/json"
      };
      const response = await axiosConfig({
        method: 'get',
        url: '/province/all',
        headers
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
  