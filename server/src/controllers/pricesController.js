import * as service from '../service/prices'

export const getPrice = async (req, res) => {
  try {
    const response = await service.pricesService()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at category controller' + error,
    })
  }
}
