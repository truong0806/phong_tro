import { v4 } from 'uuid'
import db from '../models'
import jwt from 'jsonwebtoken'

export const createToken = async (phone, id) => {
  let expiredAt = new Date()
  expiredAt.setMinutes(expiredAt.getMinutes() +  +process.env.NUMBER_JWT_REFRESH_EXPIRATION);
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
  const dateNow = new Date().getTime()
  const expiredate = token.expiryDate.getTime()
  if (expiredate < dateNow) {
    return true
  } else {
    return false
  }
}
