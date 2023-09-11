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
  const { page, priceNumber, areaNumber, ...query } = req.query
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

export const createPost = async (req, res) => {
  res.send('create')
  console.log(
    '🚀 ~ file: postController.js:45 ~ createPost ~ req.body:',
    req.body,
  )
  const {
    title,
    description,
    priceNumber,
    areaNumber,
    address,
    images,
    imageCode,
    priceCode,
    areaCode,
    province,
    userId,
    phoneContact,
    author,
  } = req.body
  console.log('🚀 ~ file: postController.js:47 ~ createPost ~ title:', title)
  try {
    if (
      !title ||
      !description ||
      !priceNumber ||
      !areaNumber ||
      !address ||
      !images ||
      !imageCode ||
      !priceCode ||
      !areaCode ||
      !province ||
      !userId ||
      !phoneContact ||
      !author
    ) {
      const response = await service.postCreateService(req.body)
      return res.status(200).json(response)
    } else {
      return res.status(400).json({ err: 1, msg: 'Missing input' })
    }
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at authentication controller' + error,
    })
  }
}
