import { axiosPrivate } from '../axiosConfig';
import { useEffect } from 'react';
import useRefeshTokken from './useRefeshToken';

const useAxiosPrivate = () => {
  const refesh = useRefeshTokken();
  useEffect(() => {
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = err.config;
        if (err.response.status === 403 || !prevRequest?.sent) {
          console.log(err.response.status);
        }
        return Promise.reject(err);
      }
    );
  }, [auth, refesh]);
};
export default useAxiosPrivate;
