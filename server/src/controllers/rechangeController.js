import * as service from '../service/recharge'

export const createPayment = async (req, res) => {
  const { id } = req.user
  console.log('🚀 ~ file: userController.js:5 ~ getUser ~ req.user:', req.user)
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