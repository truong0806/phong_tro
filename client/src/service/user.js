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
      const auth = {
        accessTokken: 'null',
        isLoggin: "'false",
        refreshToken: 'null',
      };
      
      await localStorage.setItem('persist:auth', JSON.stringify(auth));
      reject(error);
    }
  });
