import axiosConfig from '../axiosConfig';
import axios from 'axios';

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
        headers: {
          Authorization: `${JSON.parse(
            localStorage.getItem('persist:auth')
          ).accessToken.replace(/["']+/g, '')}`,
        },
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
export const apiUploadImages = (images) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'post',
        url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        data: images,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
