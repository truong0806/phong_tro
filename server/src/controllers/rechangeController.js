import * as service from '../service/recharge'

export const createPayment = async (req, res) => {
  const { id } = req.user
  try {
    const response = await service.createPaymentService(id, req, res)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at recharge controller' + error,
    })
  }
}

export const paymentResults = async (req, res) => {
  try {
    const response = await service.paymentResults(req, res)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at recharge controller' + error,
    })
  }
}
export const historyRecharge = async (req, res) => {
  const { id } = req.user
  try {
    const response = await service.getHistoryRecharge(id)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at recharge controller' + error,
    })
  }
}
