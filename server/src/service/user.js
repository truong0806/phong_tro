import db from '../models'
import { verifyOtpService } from './otp'
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
export const changePhoneNumberService = (id, queries) =>
  new Promise(async (resolve, reject) => {
    try {
      const verify = await verifyOtpService(queries.newPhone, queries.otp)
      console.log('🚀 ~ file: user.js:26 ~ newPromise ~ verify:', verify)
      if (verify.err === 1) {
        resolve({
          err: 1,
          msg: 'OTP verification failed',
        })
        return
      }
      const user = await db.User.findOne({
        where: { id },
        raw: true,
        attributes: { exclude: ['password'] },
      })
      console.log('🚀 ~ file: user.js:30 ~ newPromise ~ user:', user)
      if (!user) {
        resolve({
          err: 1,
          msg: 'User not found',
        })
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

export const editUserInfoService = (id, queries) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log('id user', id)
      const updatedRows = await db.User.update(
        {
          name: queries.name,
          zalo: queries.zalo,
          fbUrl: queries.fbUrl,
          avatar: queries.avatar,
          email: queries.email,
        },
        {
          where: { id },
        },
      )
      resolve({
        err: updatedRows ? 0 : 1,
        msg: updatedRows
          ? 'Update user info success'
          : 'Update user info failure',
      })
    } catch (error) {
      reject(error)
    }
  })
