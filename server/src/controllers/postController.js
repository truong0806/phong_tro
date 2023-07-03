import * as service from '../service/post'

export const getPost = async (req, res) => {
  try {
    const response = await service.postService()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at post controller' + error,
    })
  }
}
export const getPostLimit = async (req, res) => {
  const { page, ...query } = req.query
  try {
    const response = await service.postLimitService(page, query)
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
