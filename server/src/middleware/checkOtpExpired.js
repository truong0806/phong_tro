import { Sequelize } from 'sequelize'
import db from '../models'
import moment from 'moment'
import { Op } from 'sequelize'
const schedule = require('node-schedule')

export const checkOtpExpiredRunEvery1min = schedule.scheduleJob(
  '*/1 * * * *',
  async () => {
    try {
      const expiredOtps = await db.Otp.findAll({
        where: {
          expiresAt: {
            [Op.lt]: moment().toDate(),
          },
        },
      })
      await Promise.all(expiredOtps.map(async (otp) => otp.destroy()))
      expiredOtps.length > 0 &&
        console.log('Expired OTPs deleted:', expiredOtps.length)
    } catch (error) {
      console.error('Not found expired OTP')
    }
  },
)
