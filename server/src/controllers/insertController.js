import * as authService from '../service/auth'

export const insert = async (req, res) => {
  try {
    const response = await authService.registerService()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at authentication controller' + error,
    })
  }
}
