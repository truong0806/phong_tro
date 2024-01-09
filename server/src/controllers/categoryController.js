import * as service from '../service/category'

export const getCategory = async (req, res) => {
  try {
    const response = await service.categoriesService()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at category controller' + error,
    })
  }
}
