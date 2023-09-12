import db from '../models'
const { Op } = require('sequelize')
const moment = require('moment')
import { v4 as v4 } from 'uuid'
import generateCode from '../ultils/generateCode'
import { getNumberFromString, generateHashtag } from '../ultils/common'
import { dataArea, dataPrice } from '../ultils/data'
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
    const hashtag = generateHashtag()
    const dateCreate = moment(
      Date.now(),
      'dddd, HH:mm DD/MM/YYYY',
      'vi',
    ).toDate()
    const attributesId = v4()
    const postId = v4()
    const overviewId = v4()
    const imagesId = v4()
    const provinceCode = generateCode(
      queries.address.split(',')?.slice(-1)[0].trim(),
    )
    const labelCode = generateCode(queries.label).trim()
    const provinceCodes = []
    const labelCodes = []
    labelCodes.every((item) => item.code !== labelCode) &&
      labelCodes?.push({
        code: labelCode,
        value: queries.label,
      })
    provinceCodes.every((item) => item.code !== provinceCode) &&
      provinceCodes.push({
        code: provinceCode,
        value: queries.address.split(',')?.slice(-1)[0].trim(),
      })
    const currentArea = getNumberFromString(
      queries.areaNumber,
    )
    const currentPrice = getNumberFromString(
      queries.priceNumber,
    )

    await db.Attribute.findOrCreate({
      where: { id: attributesId },
      defaults: {
        id: attributesId,
        price: queries.priceNumber,
        acreage: queries.areaNumber,
        published: Date.now(),
        hashtag: hashtag,
      },
    }),
      await db.Images.findOrCreate({
        where: { id: imagesId },
        defaults: {
          id: imagesId,
          image: JSON.stringify(queries.images),
        },
      })
    await db.Label.findOrCreate({
      where: { code: labelCode },
      defaults: {
        code: labelCode,
        value: queries.label,
      },
    })
    await db.Overview.create({
      id: overviewId,
      code: `#${hashtag}`,
      area: queries.label,
      type: queries.categoryName,
      target: queries.target,
      bonus: "",
      created: dateCreate,
      expired: null,
    },
    )
    provinceCodes?.forEach(async (item) => {
      await db.Province.findOrCreate({
        where: { code: item.code },
        defaults: item,
      })
    })
    labelCodes?.forEach(async (item) => {
      await db.Label.findOrCreate({
        where: { code: item.code },
        defaults: item,
      })
    })
    const [post, created] = await db.Post.findOrCreate({
      where: {
        [Op.or]: [
          { title: queries.title, },
          { address: queries.address, },
          { address: queries.description, }
        ]
      },
      defaults: {
        id: postId,
        title: queries.title,
        labelCode,
        address: queries.address,
        attributesId: attributesId,
        categoryCode: queries.categoryCode,
        description: queries.description,
        userId: queries.userId,
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
    resolve({
      err: created ? 0 : 1,
      msg: created ? 'Create post succress' : 'Create post failed', 
    })
  } catch (error) {
    reject(error)
  }
})
