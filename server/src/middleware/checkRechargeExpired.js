import { Sequelize } from 'sequelize'
import db from '../models'
import moment from 'moment'
import { Op } from 'sequelize'
const schedule = require('node-schedule')

export const checkRechargeExpiredRunEvery1min = schedule.scheduleJob(
  '*/1 * * * *',
  async () => {
    const fifteenMinutesAgo = moment().subtract(2, 'minutes').toDate()
    try {
      const expiredRecharge = await db.Order.findAll({
        where: {
          status: '0',
          createdAt: {
            [Op.lt]: fifteenMinutesAgo,
          },
        },
      })
      console.log(
        '🚀 ~ file: checkRechargeExpired.js:16 ~ expiredRecharge:',
        expiredRecharge,
      )
      await Promise.all(
        expiredRecharge.map(
          async (recharge) =>
            await recharge.update({
              status: '2',
            }),
        ),
      )
      console.log('Update recharge status to 2', expiredRecharge.length)
    } catch (error) {
      console.error('Error deleting expired OTPs:', error)
    }
  },
)
