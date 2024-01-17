import * as service from '../service/labels'

export const getLabel = async (req, res) => {
  try {
    const response = await service.labelsService()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at label controller' + error,
    })
  }
}
