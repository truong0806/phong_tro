import * as service from '../service/category'
import updateCategoryCount from '../ultils/updateCategoryCount'

export const getCategory = async (req, res) => {
  try {
    const response = await service.categoriesService()
    await updateCategoryCount()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at category controller' + error,
    })
  }
}
