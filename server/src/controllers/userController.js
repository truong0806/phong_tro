import * as service from '../service/user'
import { otpService, verifyOtpService } from '../service/otp'

export const getUser = async (req, res) => {
  const { id } = req.user
  try {
    const response = await service.userService(id)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at user controller' + error,
    })
  }
}
export const changePhoneNumber = async (req, res) => {
  const { id } = req.user
  try {
    const response = await service.changePhoneNumberService(id, req.body)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at user controller' + error,
    })
  }
}
export const editUserInfo = async (req, res) => {
  const { id } = req.user
  try {
    const response = await service.editUserInfoService(id, req.body)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at user controller' + error,
    })
  }
}
export const sendOtp = async (req, res) => {
  const { phone } = req.user
  try {
    const response = await otpService(phone, req.body)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at user controller' + error,
    })
  }
}
export const verifyOtp = async (req, res) => {
  const { phone, otp } = req.body
  try {
    if (otp?.length < 6 || otp?.length > 6) {
      return res.status(500).json({
        err: -1,
        msg: 'OTP error',
      })
    }
    const response = await verifyOtpService(phone, otp)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at user controller' + error,
    })
  }
}
