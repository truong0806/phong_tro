import db from '../models'
//Get all categories
export const labelsService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Label.findAll({
        raw: true,
        attributes: ['value'],
      })
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Failed to find labels',
        response,
      })
    } catch (error) {
      reject(error)
    }
  })
