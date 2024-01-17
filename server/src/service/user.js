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
      if (!user) {
        resolve({
          err: 1,
          msg: 'User not found',
        })
      }

      const updatedRows = await db.User.update(
        {
          phone: queries?.newPhone,
        },
        {
          where: { id },
        },
      )
      if (updatedRows) {
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
