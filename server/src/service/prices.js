import db from '../models'

//Get all categories
export const pricesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Price.findAll({
        raw: true,
        attributes: ['code', 'value'],
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
