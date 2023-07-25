import axiosConfig from '../axiosConfig';

export const apiProvince1 = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: 'https://provinces.open-api.vn/api/p/',
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
