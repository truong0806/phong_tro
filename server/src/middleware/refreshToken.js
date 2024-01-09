import { v4 } from 'uuid'
import db from '../models'
import jwt from 'jsonwebtoken'
import moment from 'moment'
import genarateDate from '../ultils/generateDate'
import { generateRefeshToken, verifyAccessToken } from '../middleware/jwt'

export const createToken = async (id, phone) => {
  const expiryDate = moment().add(7, 'days').format('YYYY-MM-DD HH:mm:ss')
  let _token = generateRefeshToken(id)

  const refreshToken = await db.RefreshToken.create({
    id: v4(),
    token: _token,
    userId: id,
    expire: expiryDate,
  })

  return refreshToken.token
}
export const verifyExpiration = (token) => {
  if (!token) {
    return false
  } else {
    const now = moment()
    const expireDate = token.expire
    console.log(
      '🚀 ~ file: refreshToken.js:32 ~ verifyExpiration ~ expireDate:',
      expireDate,
    )
    if (now.isAfter(expireDate)) {
      return true
    } else {
      return true
    }
  }
}

export const verifyRefreshToken = async (refreshToken) => {
  return new Promise(async (resolve, reject) => {
    console.log('refreshToken', refreshToken)
    const userToken = await db.RefreshToken.findOne({
      where: { token: refreshToken },
    })
    if (!userToken) resolve({ error: 0, message: 'Invalid refresh token' })
    const ver = verifyExpiration(userToken)
    if (ver) {
      jwt.verify(
        refreshToken,
        process.env.SECRET_KEY_REFRESH,
        (err, tokenDetails) => {
          if (err) reject(err)
          resolve({
            tokenDetails,
            error: false,
            message: 'Valid refresh token',
          })
        },
      )
    } else {
      reject({
        err: 1,
        msg: 'Refesh Token expired',
      })
    }
  })
}
