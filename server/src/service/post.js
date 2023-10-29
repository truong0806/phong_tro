import db, { sequelize } from '../models'
const { Op } = require('sequelize')
const moment = require('moment')
import async from 'async'
import { v4 as v4 } from 'uuid'
import { getNumberFromString, generateHashtag } from '../ultils/common'
import { dataArea, dataPrice } from '../ultils/data'
import genarateDate from '../ultils/generateDate'
import generateCode from '../ultils/generateCode'
import { checkStatus } from '../ultils/checkStatus'
//Get all post
export const postService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAndCountAll({
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
          [Op.and]: [{ [Op.gte]: priceNumber[0] }, { [Op.lt]: priceNumber[1] }],
        }
      if (areaNumber)
        queries.areaNumber = {
          [Op.and]: [{ [Op.gte]: areaNumber[0] }, { [Op.lt]: areaNumber[1] }],
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

export const postLimitAdminService = (page, query, id, bonus) =>
  new Promise(async (resolve, reject) => {
    let today = genarateDate().today
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1
      const queries = {
        ...query,
        userId: id,
      }
      let overview = {
        model: db.Overview,
        as: 'overviews',
        attributes: ['id', 'bonus', 'code', 'create', 'expire', 'target'],
      }
      let categories = {
        model: db.Category,
        as: 'categories',
        attributes: ['id', 'code', 'value'],
      }
      if (bonus !== undefined && bonus !== '') {
        overview.where = { bonus: bonus }
      }

      const response = await db.Post.findAndCountAll({
        where: queries,
        raw: true,
        nest: true,
        offset: offset * +process.env.LIMIT_ADMIN,
        limit: +process.env.LIMIT,
        order: [['createdAt', 'DESC']],
        include: [
          { model: db.Images, as: 'images', attributes: ['image'] },
          {
            model: db.Attribute,
            as: 'attributes',
            attributes: ['price', 'acreage', 'published', 'hashtag'],
          },
          categories,
          overview,
          {
            model: db.User,
            as: 'users',
            attributes: ['name', 'phone', 'zalo'],
          },
        ],
        attributes: ['id', 'title', 'star', 'address', 'description'],
        distinct: true,
      })
      response.rows.forEach((row) => {
        row.overviews.status = checkStatus(
          row?.overviews?.expire?.split(' ')[3],
        )
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
    try {
      const hashtag = generateHashtag()
      let attributesId = v4()
      const postId = v4()
      const currentDate = genarateDate()
      let overviewId = v4()
      const imagesId = v4()
      const labelCode = generateCode(queries.label).trim()
      const currentArea = getNumberFromString(queries.areaNumber)
      const currentPrice = getNumberFromString(queries.priceNumber) / 1000000
      const provinceCode = queries?.province?.includes('Thành phố')
        ? generateCode(queries?.province?.replace('Thành phố ', ''))
        : generateCode(queries?.province?.replace('Tỉnh', ''))

      await db.Attribute.findOrCreate({
        where: {
          [Op.and]: [
            {
              price:
                +currentPrice < 1
                  ? `${currentPrice * 1000000} đồng/tháng`
                  : `${currentPrice} triệu/tháng`,
            },
            { acreage: `${queries.areaNumber} m2` },
          ],
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
      })
        .then(([attribute, created]) => {
          if (!created) {
            console.log('Attribute ID:', attribute.id)
            attributesId = attribute.id
            console.log('Attribute after:', attributesId)
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      await db.Overview.findOrCreate({
        where: {
          [Op.and]: [
            {
              area: queries.label,
            },
            { type: queries?.categoryName },
            { target: queries?.target },
          ],
        },
        defaults: {
          id: overviewId,
          code: `#${hashtag}`,
          area: queries.label,
          type: queries?.categoryName,
          target: queries?.target,
          bonus: 'Tin thường',
          create: currentDate.today,
          expire: currentDate.expireDay,
        },
      }).then(([overview, isCreated]) => {
        if (!isCreated) {
          console.log('overview ID:', overview.id)
          overviewId = overview.id
          console.log('overview after:', overviewId)
        }
      })
      await db.Label.findOrCreate({
        where: { code: labelCode },
        defaults: {
          code: labelCode,
          value: queries.label,
        },
      })
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
      await db.Images.findOrCreate({
        where: { id: imagesId },
        defaults: {
          id: imagesId,
          image: JSON.stringify(queries.images),
        },
      })
      await db.Post.findOrCreate({
        where: {
          [Op.or]: [
            { title: queries.title },
            { address: queries.address },
            { description: queries.description },
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
          areaNumber: +currentArea || null,
        },
      })
        .then(([postRow, isCreated]) => {
          if (!isCreated) {
            db.Images.destroy({ where: { id: imagesId } })
            console.log('Không thể tạo bài đăng')
          } else {
            resolve({
              err: isCreated ? 0 : 1,
              msg: isCreated ? 'Create post success' : 'Create post failed',
            })
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    } catch (error) {
      reject(error)
    }
  })

export const postDeleteService = (postId) =>
  new Promise(async (resolve, reject) => {
    try {
      const post = await db.Post.findOne({
        where: { id: postId },
        attributes: [
          'id',
          'title',
          'star',
          'address',
          'description',
          'overviewId',
          'attributesId',
          'imagesId',
        ],
      })
      if (!post) {
        resolve({
          err: 1,
          msg: 'Delete post failed ',
        })
        return
      }
      await db.Overview.destroy({ where: { id: post.overviewId } })
      await db.Attribute.destroy({ where: { id: post.attributesId } })
      await db.Images.destroy({ where: { id: post.imagesId } })
      const deleted = await db.Post.destroy({ where: { id: postId } })
      resolve({
        err: deleted > 0 ? 0 : 1,
        msg: deleted > 0 ? 'Delete post success' : 'Delete post failed',
        deleted,
      })
    } catch (error) {
      reject(error)
    }
  })
export const postUpdateService = (postId) =>
  new Promise(async (resolve, reject) => {
    try {
      const post = await db.Post.findOne({
        where: { id: postId },
        attributes: [
          'id',
          'title',
          'star',
          'address',
          'description',
          'overviewId',
          'attributesId',
          'imagesId',
        ],
      })
      if (!post) {
        resolve({
          err: 1,
          msg: 'Delete post failed ',
        })
        return
      }
      await db.Overview.destroy({ where: { id: post.overviewId } })
      await db.Attribute.destroy({ where: { id: post.attributesId } })
      await db.Images.destroy({ where: { id: post.imagesId } })
      const deleted = await db.Post.destroy({ where: { id: postId } })
      resolve({
        err: deleted > 0 ? 0 : 1,
        msg: deleted > 0 ? 'Delete post success' : 'Delete post failed',
        deleted,
      })
    } catch (error) {
      reject(error)
    }
  })
