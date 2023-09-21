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
          [Op.and]: [
            { [Op.gte]: priceNumber[0] },
            { [Op.lt]: priceNumber[1] }
          ]
        }
      if (areaNumber)
        queries.areaNumber = {
          [Op.and]: [
            { [Op.gte]: areaNumber[0] },
            { [Op.lt]: areaNumber[1] }
          ]

        }
      const response = await db.Post.findAndCountAll({
        where: queries,
        raw: true,
        nest: true,
        offset: offset * +process.env.LIMIT,
        limit: +process.env.LIMIT,
        order: [['createdAt', 'DESC']],
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
export const postCreateService = (queries) =>
  new Promise(async (resolve, reject) => {
    console.log("🚀 ~ file: post.js:99 ~ queries:", queries)
    try {
      const hashtag = generateHashtag()
      const currentDate = new Date()
      const attributesId = v4()
      const postId = v4()
      const overviewId = v4()
      const imagesId = v4()
      const labelCode = generateCode(queries.label).trim()
      const currentArea = getNumberFromString(queries.areaNumber)
      const currentPrice = getNumberFromString(queries.priceNumber) / 1000000
      const provinceCode = queries?.province?.includes('Thành phố')
        ? generateCode(queries?.province?.replace('Thành phố ', ''))
        : generateCode(queries?.province?.replace('Tỉnh', ''))

      await db.Attribute.findOrCreate({
        where: {
          id: attributesId,
          price:
            +currentPrice < 1
              ? `${queries.priceNumber} đồng/tháng`
              : `${currentPrice} triệu/tháng`,
          acreage: `${queries.areaNumber} m2`,
          published: moment(new Date()).format('DD/MM/YYYY'),
          hashtag,
        },
        defaults: {
          id: attributesId,
          price:
            +currentPrice < 1
              ? `${queries.priceNumber} đồng/tháng`
              : `${currentPrice} triệu/tháng`,
          acreage: `${queries.areaNumber} m2`,
          published: moment(new Date()).format('DD/MM/YYYY'),
          hashtag,
        },
      }),
        console.log(1);
      await db.Images.findOrCreate({
        where: { id: imagesId },
        defaults: {
          id: imagesId,
          image: JSON.stringify(queries.images),
        },
      })
      console.log(2);
      await db.Label.findOrCreate({
        where: { code: labelCode },
        defaults: {
          code: labelCode,
          value: queries.label,
        },
      })
      console.log(3);
      await db.Overview.create({
        id: overviewId,
        code: `#${hashtag}`,
        area: queries.label,
        type: queries?.categoryName,
        target: queries?.target,
        bonus: 'Tin thường',
        create: currentDate,
        expire: currentDate.setDate(currentDate.getDate() + 10),
      })
      console.log(4);
      await db.Province.findOrCreate({
        where: {
          [Op.or]: [
            { value: queries?.province?.replace('Thành phố ', '') },
            { value: queries?.province?.replace('Tỉnh ', '') },
          ],
        },
        defaults: {
          code: provinceCode,
          value: queries?.province?.includes('Thành phố ')
            ? queries?.province?.replace('Thành phố ', '')
            : queries?.province?.replace('Tỉnh ', ''),
        },
      })
      console.log(5);
      const [post, created] = await db.Post.findOrCreate({
        where: {
          [Op.or]: [
            { title: queries.title },
            { address: queries.address },
            { address: queries.description },
          ],
        },
        defaults: {
          id: postId,
          title: queries.title || null,
          labelCode,
          address: queries.address || null,
          attributesId: attributesId,
          categoryCode: queries.categoryCode,
          description: JSON.stringify(queries.description) || null,
          userId: queries.userId,
          overviewId,
          imagesId,
          areaCode: dataArea.find(
            (area) => area.max > currentArea && area.min <= currentArea,
          )?.code,
          priceCode: dataPrice.find(
            (price) => price.max > currentPrice && price.min <= currentPrice,
          )?.code,
          provinceCode: provinceCode || null,
          priceNumber: +currentPrice || null,
          areaNumber: +currentArea || null
        },
      })
      console.log(6);
      resolve({
        err: created ? 0 : 1,
        msg: created ? 'Create post succress' : 'Create post failed',
      })
    } catch (error) {
      reject(error)
    }
  })
