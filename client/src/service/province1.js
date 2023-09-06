import axiosConfig from '../axiosConfig';

export const apiLocation = () =>
  new Promise(async (resolve, reject) => {
    try {
      const provinces = await axiosConfig({
        method: 'get',
        url: 'https://provinces.open-api.vn/api/p/',
      });
      const districts = await axiosConfig({
        method: 'get',
        url: 'https://provinces.open-api.vn/api/d/',
      });
      const wards = await axiosConfig({
        method: 'get',
        url: 'https://provinces.open-api.vn/api/w/',
      });
      resolve({ provinces, districts, wards });
    } catch (error) {
      reject(error);
    }
  });
