import db from '../models'
import generateOtp from '../ultils/generateOtp'
import moment from 'moment'
import { Op } from 'sequelize'
import bcrypt from 'bcryptjs'

export const otpService = (phone, queries) =>
  new Promise(async (resolve, reject) => {
    try {
      const expirationTime = moment().add(5, 'minutes')
      const user = await db.User.findOne({
        where: { phone },
        raw: true,
        attributes: { exclude: ['password'] },
      })
      if (!user) {
        resolve({
          err: 1,
          msg: 'User not found',
        })
        return
      }
      const otp = await generateOtp()
      const create = await db.Otp.create({
        phone: queries?.newPhone,
        otp: otp.hashOtp,
        expiresAt: expirationTime,
      })
      console.log('OTP created:::', otp.otp)
      resolve({
        err: 0,
        msg: 'OTP sent successfully',
      })
    } catch (error) {
      reject(error)
    }
  })

export const verifyOtpService = (phone, otp) =>
  new Promise(async (resolve, reject) => {
    try {
      const otpHolder = await db.Otp.findAll({
        raw: true,
        where: {
          phone: phone,
          expiresAt: {
            [Op.gt]: moment().toDate(),
            [Op.lt]: moment().add(5, 'minutes').toDate(),
          },
        },
        order: [['createdAt', 'DESC']],
        limit: 1,
      })

      if (!otpHolder.length) {
        resolve({
          err: 1,
          msg: 'Expired OTP',
        })
      }

      const lastOtp = otpHolder[otpHolder.length - 1]
      const isvalid = await bcrypt.compare(otp, lastOtp.otp)

      if (!isvalid) {
        resolve({
          err: 1,
          msg: 'OTP verification failed',
        })
      }
      if (isvalid && phone === lastOtp.phone) {
        resolve({
          err: 0,
          msg: 'Verify OTP successfully',
        })
      }
    } catch (error) {
      reject(error)
    }
  })
