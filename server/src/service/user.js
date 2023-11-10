import db from '../models'

//Get all categories
export const userService = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { id },
        raw: true,
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
      })
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Failed to get user',
        response,
      })
    } catch (error) {
      reject(error)
    }
  })
export const userEditService = (id, queries) =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id },
        raw: true,
        attributes: { exclude: ['password'] },
      })
      console.log('🚀 ~ file: user.js:30 ~ newPromise ~ user:', user)
      if (!user) {
        resolve({
          err: 1,
          msg: 'Delete post failed ',
        })
        return
      }
      console.log('🚀 ~ file: user.js:44 ~ queries', queries)

      const updatedRows = await db.User.update(
        {
          phone: queries?.newPhone,
        },
        {
          where: { id },
        },
      )
      console.log(
        '🚀 ~ file: user.js:44 ~ newPromise ~ updatedRows:',
        updatedRows,
      )
      if (updatedRows) {
        console.log(`Updated rows: ${updatedRows}`)
        resolve({
          err: 0,
          msg: 'Update user success',
        })
      } else {
        resolve({
          err: 1,
          msg: 'user not found 11',
        })
      }
    } catch (error) {
      reject(error)
    }
  })
