import * as authService from '../service/auth'
import db from '../models'
import {
  verifyExpiration,
  verifyRefreshToken,
} from '../middleware/refreshToken'
import { generateAccessToken } from '../middleware/jwt'

export const register = async (req, res) => {
  const { phone, name, password } = req.body
  try {
    if (!phone || !password || !name)
      return res.status(400).json({ err: 1, msg: 'Missing input' })
    if (password.length < 6) {
      return res
        .status(400)
        .json({ err: 1, msg: 'Password must be at least 6 characters' })
    }
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
    if (password.length < 6) {
      return res
        .status(400)
        .json({ err: 1, msg: 'Password must be at least 6 characters' })
    }
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
  const { refreshTokens } = req.body

  if (refreshTokens == null) {
    return res.status(403).json({ err: 1, msg: 'Refresh Token is required!' })
  }

  try {
    verifyRefreshToken(refreshTokens)
      .then(({ tokenDetails }) => {
        const accessToken = generateAccessToken(
          tokenDetails.id,
          tokenDetails.phone,
        )
        res.status(200).json({
          err: 0,
          accessToken,
          msg: 'Access token created successfully',
        })
      })

      .catch((err) =>
        res.status(200).json({
          err: 1,
          msg: 'Token expired',
        }),
      )
  } catch (err) {
    return res.status(500).send({ msg: err })
  }
}

export const refreshTokenDelete = async (req, res) => {
  const { refreshTokens } = req.body
  try {
    const userToken = await db.RefreshToken.findOne({
      where: { token: refreshTokens },
    })
    if (!userToken)
      return res
        .status(200)
        .json({ error: 0, message: 'Logged Out Sucessfully' })

    await db.RefreshToken.destroy({
      where: {
        id: userToken.id,
      },
    })
    res.status(200).json({ error: 0, message: 'Logged Out Sucessfully' })
  } catch (err) {
    res.status(500).json({ err: 1, msg: 'Internal Server Error' })
  }
}
export const changePassword = async (req, res) => {
  try {
    const response = await authService.changePasswordService(req.user, req.body)
    return res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ err: 1, msg: 'Internal Server Error' })
  }
}
