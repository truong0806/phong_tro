import axiosConfig from '../axiosConfig'
export const apiCategories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/category/all',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
