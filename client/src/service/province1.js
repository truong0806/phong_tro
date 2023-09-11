import axiosDefaults from 'axios';

export const apiLocation = () =>
  new Promise(async (resolve, reject) => {
    try {
      const provinces = await axiosDefaults({
        method: 'get',
        url: 'https://provinces.open-api.vn/api/p/',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS'
        }
      });
      resolve(provinces);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetDistricts = (provinceCode) =>
  new Promise(async (resolve, reject) => {
    console.log('🚀 ~ file: province1.js:29 ~ provinceCode', provinceCode);
    try {
      const response = await axiosDefaults({
        method: 'get',
        url: `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS'
        }
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetWard = (districtCode) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefaults({
        method: 'get',
        url: `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS'
        }
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
