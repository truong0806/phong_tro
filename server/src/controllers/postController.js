import * as service from '../service/post'

export const getPost = async (req, res) => {
  try {
    const response = await service.postService()
    res.header('Access-Control-Expose-Headers', 'Content-Range')
    res.header('Content-Range', `"all 0-5/${response.response.count}"`)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at post controller' + error,
    })
  }
}
export const getPostLimit = async (req, res) => {
  const { page, priceNumber, areaNumber, ...query } = req.query
  console.log("🚀 ~ file: postController.js:18 ~ getPostLimit ~ query:", query)
  try {
    const response = await service.postLimitService(page, query, {
      priceNumber,
      areaNumber,
    })
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at post controller' + error,
    })
  }
}
export const getPostLimitAdmin = async (req, res) => {
  const { page, bonus, ...query } = req.query
  const { id } = req.user
  console.log('🚀 ~ file: postController.js:34 ~ getPostLimitAdmin ~ id:', id)
  try {
    if (!id) {
      return res.status(400).json({
        err: 1,
        msg: 'Missing input',
      })
    }
    const response = await service.postLimitAdminService(page, query, id, bonus)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at post controller' + error,
    })
  }
}
export const createPost = async (req, res) => {
  const { categoryCode, title, description, priceNumber, areaNumber, label } =
    req.body
  try {
    if (
      !categoryCode ||
      !title ||
      !description ||
      !priceNumber ||
      !areaNumber
    ) {
      return res.status(400).json({ err: 1, msg: 'Missing input' })
    } else {
      const response = await service.postCreateService(req.body)
      return res.status(200).json(response)
    }
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at authentication controller' + error,
    })
  }
}
export const deletePost = async (req, res) => {
  const { postId } = req.query
  console.log('🚀 ~ file: postController.js:76 ~ deletePost ~ id:', postId)
  try {
    if (!postId) {
      return res.status(400).json({ err: 1, msg: 'Missing input' })
    } else {
      const deleted = await service.postDeleteService(postId)
      console.log(
        '🚀 ~ file: postController.js:82 ~ deletePost ~ response:',
        deleted,
      )
      return res.status(200).json(deleted)
    }
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at authentication controller' + error,
    })
  }
}
export const updatePost = async (req, res) => {
  const {
    postId,
    categoryCode,
    title,
    description,
    priceNumber,
    areaNumber
  } = req.body
  console.log(
    '🚀 ~ file: postController.js:97 ~ updatePost ~ categoryCode:',
    categoryCode,
  )

  console.log(
    '🚀 ~ file: postController.js:98 ~ updatePost ~  req.body:',
    req.query,
  )
  console.log('🚀 ~ file: postController.js:76 ~ deletePost ~ id:', postId)

  try {
    if (
      !title ||
      !description ||
      !priceNumber ||
      !areaNumber ||
      !postId 
    ) {
      return res.status(400).json({ err: 1, msg: 'Missing input' })
    } else {
      const response = await service.postUpdateService(postId, req.body)
      console.log(
        '🚀 ~ file: postController.js:82 ~ UpdatePost ~ response:',
        response,
      )
      return res.status(200).json(response)
    }
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at authentication controller' + error,
    })
  }
}
