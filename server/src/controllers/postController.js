import * as service from '../service/post'
import updateCategoryCount from '../ultils/updateCategoryCount'

export const getPost = async (req, res) => {
  try {
    const response = await service.postService()
    await updateCategoryCount()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at post controller' + error,
    })
  }
}
export const getPostLimit = async (req, res) => {
  const { offset, ...query } = req.query
  console.log(query)
  try {
    const response = await service.postLimitService(offset, query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at post controller' + error,
    })
  }
}

export const getPostsByCategory = async (req, res) => {
  const { code } = req.query
  try {
    const response = await service.getPostsByCategoryService(code)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at post controller' + error,
    })
  }
}
