import db from '../models'
const { Op } = require('sequelize')

import { v4 as v4 } from 'uuid'
//Get all post
export const postService = () =>
  new Promise(async (resolve, reject) => {
    try {
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
    } catch (error) {
      reject(error)
    }
  })
export const postLimitService = (page, query, { priceNumber, areaNumber }) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1
      const queries = {
        ...query,
      }
      if (priceNumber)
        queries.priceNumber = {
          [Op.between]: priceNumber,
        }
      if (areaNumber)
        queries.areaNumber = {
          [Op.between]: areaNumber,
        }
      const response = await db.Post.findAndCountAll({
        where: queries,
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
export const postCreateService = (queries) => new Promise(async (resolve, reject) => {
  try {
    let postId = v4()
    let labelCode = genarateCode(item?.header?.class?.classType).trim()
    await db.Post.findOrCreate({
      where: {
        id: postId,
        title: queries.title,
        address: queries.address,
      },
      defaults: {
        id: postId,
        title: queries.title,
        labelCode,
        address: item?.header?.address,
        attributesId: attributesId,
        categoryCode: cate.code,
        description: desc,
        userId,
        overviewId,
        imagesId,
        areaCode: dataArea.find(
          (area) => area.max > currentArea && area.min <= currentArea,
        )?.code,
        priceCode: dataPrice.find(
          (price) =>
            price.max > currentPrice && price.min <= currentPrice,
        )?.code,
        provinceCode,
        priceNumber: +currentPrice,
        areaNumber: +currentArea,
      },
    })
    resolve('Create post done')
  } catch (error) {
    reject(error)
  }
})
