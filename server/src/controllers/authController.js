import * as authService from '../service/auth'
import db from '../models'
import { verifyExpiration } from '../middleware/refreshToken'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  const { phone, name, password } = req.body
  try {
    if (!phone || !password || !name)
      return res.status(400).json({ err: 1, msg: 'Missing input' })
    const isCorrectphones = /^-?[\d.]+(?:e-?\d+)?$/.test(phone)
    if (isCorrectphones) {
      if (phone.toString().length === 10) {
        const response = await authService.registerService(req.body)
        return res.status(200).json(response)
      } else {
        return res.status(400).json({
          err: 1,
          msg: 'The number does not have 10 digits.',
        })
      }
    } else {
      return res.status(400).json({ err: 1, msg: 'Input not number' })
    }
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at authentication controller' + error,
    })
  }
}
export const login = async (req, res) => {
  const { phone, password } = req.body
  try {
    if (!phone || !password)
      return res.status(400).json({ err: 1, msg: 'Missing input' })
    const isCorrectphones = /^-?[\d.]+(?:e-?\d+)?$/.test(phone)
    if (isCorrectphones) {
      if (phone.toString().length === 10) {
        const response = await authService.loginService(req.body)
        return res.status(200).json(response)
      } else {
        return res.status(400).json({
          err: 1,
          msg: 'The number does not have 10 digits.',
        })
      }
    } else {
      return res.status(400).json({ err: 1, msg: 'Input not number' })
    }
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at authentication controller' + error,
    })
  }
}
export const refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body

  if (requestToken == null) {
    return res.status(403).json({ message: 'Refresh Token is required!' })
  }

  try {
    let refreshToken = await db.RefreshToken.findOne({
      where: { token: requestToken },
    })

    if (!refreshToken) {
      res.status(403).json({ message: 'Refresh token is not in database!' })
      return
    }
    if (verifyExpiration(refreshToken)) {
      db.RefreshToken.destroy({ where: { id: refreshToken.id } })
      res.status(403).json({
        message: 'Refresh token was expired. Please make a new signin request',
      })
      return
    }
    
    const user = await db.User.findOne({ where: { id: refreshToken.userId } })
    let newAccessToken = jwt.sign({ id: user.id, phone: user.phone }, process.env.SECRET_KEY, {
      expiresIn: `${process.env.JWT_EXPIRATION}s`,
    })
    
    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    })
  } catch (err) {
    return res.status(500).send({ message: err })
  }
}
