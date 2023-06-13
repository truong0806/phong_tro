import axiosConfig from '../axiosConfig';
export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/post/all',
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetPostsLimit = (query) =>
  new Promise(async (resolve, reject) => {
  
    try {
      const response = await axiosConfig({
        method: 'get',
        url: `/post/limit`,
        params: query,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetPostsByCategory = (categoryCode) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: `/post/category?code=${categoryCode}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
