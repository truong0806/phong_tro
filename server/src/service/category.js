import db from '../models'

//Get all categories
export const categoriesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        raw: true,
      })
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Failed to find category',
        response,
      })
    } catch (error) {
      reject(error)
    }
  })
