import db from '../models'

//Get all categories
export const provinceService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Province.findAll({
        raw: true,
      })
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Failed to find province',
        response,
      })
    } catch (error) {
      reject(error)
    }
  })
