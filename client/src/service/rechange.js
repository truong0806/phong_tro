import axiosConfig from '../axiosConfig';
import axios from 'axios';

export const apiCreatePayment = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'post',
        url: `/recharge/create_payment_url`,
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
