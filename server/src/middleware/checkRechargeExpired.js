import { Sequelize } from 'sequelize'
import db from '../models'
import moment from 'moment'
import { Op } from 'sequelize'
const schedule = require('node-schedule')

export const checkRechargeExpiredRunEvery1min = schedule.scheduleJob(
  '*/1 * * * *',
  async () => {
    const fifteenMinutesAgo = moment().subtract(15, 'minutes').toDate()
    try {
      const expiredRecharge = await db.Order.findAll({
        where: {
          status: '0',
          createdAt: {
            [Op.lt]: fifteenMinutesAgo,
          },
        },
      })
      await Promise.all(
        expiredRecharge.map(async (recharge) => {
          const updated = await recharge.update({
            status: '2',
          })
        }),
      )
    } catch (error) {
      console.error('Error deleting expired recharge:', error)
    }
  },
)
