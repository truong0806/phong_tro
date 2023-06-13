import * as service from '../service/areas'

export const getArea = async (req, res) => {
  try {
    const response = await service.areasService()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at category controller' + error,
    })
  }
}
