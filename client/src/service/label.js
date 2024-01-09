import axiosConfig from '../axiosConfig';

export const apiGetAllLabel = (query) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/label/all',
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
