import { v4 } from 'uuid'
import db from '../models'
import jwt from 'jsonwebtoken'
import moment from 'moment'

export const createToken = async (phone, id) => {
  let expiredAt = new Date()
  expiredAt.setMinutes(
    expiredAt.getMinutes() + +process.env.NUMBER_JWT_REFRESH_EXPIRATION,
  )
  let _token = jwt.sign(
    { id: id, phone: phone },
    process.env.SECRET_KEY_REFRESH,
  )
  let refreshToken = await db.RefreshToken.create({
    id: v4(),
    token: _token,
    userId: id,
    expiryDate: expiredAt.getTime(),
  })

  return refreshToken.token
}
export const verifyExpiration = (token) => {
  const now = moment()
  const expireDate = token.expiryDate.getTime()
  if (now.isAfter(expireDate)) {
    return false
  } else {
    return true
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
