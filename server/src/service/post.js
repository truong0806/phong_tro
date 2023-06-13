import db from '../models'

//Get all post
export const postService = () =>
  new Promise(async (resolve, reject) => {
    try {
      console.time('requestTime')
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Images, as: 'images', attributes: ['image'] },
          {
            model: db.Attribute,
            as: 'attributes',
            attributes: ['price', 'acreage', 'published', 'hashtag'],
          },
          {
            model: db.User,
            as: 'users',
            attributes: ['name', 'phone', 'zalo'],
          },
          // {
          //   model: db.Label,
          //   as: 'label',
          //   attributes: ['code', 'value'],
          // },
        ],
        attributes: [
          'id',
          'title',
          'star',
          'address',
          'description',
          'createdAt',
        ],
        distinct: true,
      })
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Failed to find post',
        response,
      })
      console.timeEnd('requestTime')
    } catch (error) {
      reject(error)
    }
  })
export const postLimitService = (page, query) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1
      const response = await db.Post.findAndCountAll({
        where: query,
        raw: true,
        nest: true,
        offset: offset * +process.env.LIMIT,
        limit: +process.env.LIMIT,
        include: [
          { model: db.Images, as: 'images', attributes: ['image'] },
          {
            model: db.Attribute,
            as: 'attributes',
            attributes: ['price', 'acreage', 'published', 'hashtag'],
          },
          {
            model: db.User,
            as: 'users',
            attributes: ['name', 'phone', 'zalo'],
          },
          // {
          //   model: db.Label,
          //   as: 'label',
          //   attributes: ['code', 'value'],
          // },
        ],
        attributes: ['id', 'title', 'star', 'address', 'description'],
        distinct: true,
      })
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Failed to find post',
        response,
      })
    } catch (error) {
      reject(error)
    }
  })

export const getPostsByCategoryService = (category) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAndCountAll({
        where: {
          categoryCode: category,
        },
      })
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Failed to find post',
        response,
      })
    } catch (error) {
      reject(error)
    }
  })
