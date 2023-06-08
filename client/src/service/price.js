import axiosConfig from '../axiosConfig'
export const apiPrices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/price/all',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
