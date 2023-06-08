import axiosConfig from '../axiosConfig'
export const apiAreas = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/area/all',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
