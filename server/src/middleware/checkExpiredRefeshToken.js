import db from '../models'

const schedule = require('node-schedule')

export const checkExpiredRefeshToken = () => {
  schedule.scheduleJob('* * * * *', async function () {
    const now = new Date()
    const deleted = await db.RefreshToken.destroy({
      where: {
        expiresAt: {
          [Op.lt]: now,
        },
      },
    })
  })
  next()
}
