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
export const postService = ({ query }) =>
  new Promise(async (resolve, reject) => {
    try {
      const queries = {}
      let order = [['star', 'DESC']] // Mặc định sắp xếp theo star giảm dần

      if (query === 'tinmoi') {
        order = [['createdAt', 'DESC']] // Nếu là 'tinmoi', thay đổi sắp xếp theo createdAt giảm dần
      }

      const response = await db.Post.findAll({
        include: [
          { model: db.Images, as: 'images', attributes: ['image'] },
          {
            model: db.Attribute,
            as: 'attributes',
            attributes: ['price', 'acreage', 'published', 'hashtag'],
          },
          {
            model: db.Overview,
            as: 'overviews',
            attributes: ['id', 'bonus', 'code', 'create', 'expire', 'target'],
          },
        ],
        order: order, // Sử dụng order tùy thuộc vào giá trị của query
        limit: query === 'tinmoi' ? 10 : 3, // Giới hạn số lượng bài đăng trả về
      })

      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Failed to get post',
        response,
      })
    } catch (error) {
      reject(error)
    }
  })

export const postLimitService = (
  page,
  query,
  { label, priceNumber, areaNumber },
) =>
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
      if (queries.categoryCode && queries.categoryCode !== null) {
        queries.categoryCode = queries.categoryCode
      }

      if (queries.provinceCode && queries.provinceCode !== null) {
        queries.provinceCode = queries.provinceCode
      }
      let overview = {
        model: db.Overview,
        as: 'overviews',
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
      }
      let label = {
        model: db.Label,
        as: 'labels',
        attributes: { exclude: ['id', 'code', 'createdAt', 'updatedAt'] },
      }
      let categories = {
        model: db.Category,
        as: 'categories',
        attributes: ['id', 'code', 'value'],
      }
      const response = await db.Post.findAndCountAll({
        where: queries,
        raw: true,
        nest: true,
        offset: offset * +process.env.LIMIT,
        limit: +process.env.LIMIT,
        order: [['star', 'DESC']],
        include: [
          { model: db.Images, as: 'images', attributes: ['image'] },
          {
            model: db.Attribute,
            as: 'attributes',
            attributes: ['price', 'acreage', 'published', 'hashtag'],
          },
          label,
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
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Failed to find post',
        response,
      })
    } catch (error) {
      reject(error)
    }
  })
export const getPostWithLabelService = (label) =>
  new Promise(async (resolve, reject) => {
    try {
      const labelCode = await db.Label.findOne({
        where: { value: label },
      })
      const response = await db.Post.findAndCountAll({
        where: { labelCode: labelCode.code },
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
            attributes: ['name', 'phone'],
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
        // userId: id,
      }
      let overview = {
        model: db.Overview,
        as: 'overviews',
        attributes: ['id', 'bonus', 'code', 'create', 'expire', 'target'],
      }
      let categories = {
        model: db.Category,
        as: 'categories',
        attributes: ['code', 'value'],
      }
      let labels = {
        model: db.Label,
        as: 'labels',
        attributes: ['code', 'value'],
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
          {
            model: db.Label,
            as: 'labels',
            attributes: ['value'],
          },
          labels,
          categories,
          overview,
          {
            model: db.User,
            as: 'users',
            attributes: ['name', 'phone', 'zalo'],
          },
        ],
        attributes: [
          'id',
          'title',
          'star',
          'address',
          'description',
          'priceNumber',
          'areaNumber',
        ],
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
      const currentDate = genarateDate(7)
      let overviewId = v4()
      let locationId = v4()
      const imagesId = v4()
      const label = `${queries.categoryName} ${queries.province}`
      const labelCode = generateCode(label).trim()
      const currentArea = getNumberFromString(queries.areaNumber)
      const currentPrice = getNumberFromString(queries.priceNumber) / 1000000
      const provinceCode = queries?.province?.includes('Thành phố')
        ? generateCode(queries?.province?.replace('Thành phố ', ''))
        : generateCode(queries?.province?.replace('Tỉnh ', ''))

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
            attributesId = attribute.id
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      await db.Overview.findOrCreate({
        where: { id: overviewId },
        defaults: {
          id: overviewId,
          code: `#${hashtag}`,
          area: label,
          type: queries?.categoryName,
          target: queries?.target,
          bonus: 'Tin thường',
          create: currentDate.today,
          expire: currentDate.expireDay,
        },
      })
      await db.Label.findOrCreate({
        where: { code: labelCode },
        defaults: {
          code: labelCode,
          value: label,
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
          image: JSON.stringify(queries.images) || '',
        },
      })
      await db.Location.findOrCreate({
        where: { id: locationId },
        defaults: {
          lat: queries.lat || '',
          lng: queries.lng || '',
        },
      })
      await db.Post.findOrCreate({
        where: {
          [Op.or]: [
            { title: queries.title },
            {
              address: `${queries.apartmentNumber}, ${queries.street}, ${queries.ward}, ${queries.district}, ${queries.province},`,
            },
            { description: queries.description },
          ],
        },
        defaults: {
          id: postId,
          title: queries.title || null,
          labelCode,
          address:
            `${queries.apartmentNumber}, ${queries.street}, ${queries.ward}, ${queries.district}, ${queries.province},` ||
            null,
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
          locationId,
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

export const postUpdateService = (postId, queries) =>
  new Promise(async (resolve, reject) => {
    try {
      const post = await db.Post.findOne({ where: { id: postId } })
      let attributesId = v4()
      let overviewId = v4()
      const imagesId = v4()
      const hashtag = generateHashtag()
      const currentDate = genarateDate(7)
      const currentArea = getNumberFromString(queries.areaNumber)
      const currentPrice = getNumberFromString(queries.priceNumber) / 1000000
      const label = `${queries.categoryName} ${queries.province}`
      const labelCode = generateCode(label).trim()
      const address = `${queries.apartmentNumber}, ${queries.street}, ${queries.ward}, ${queries.district}, ${queries.province}`
      const provinceCode = queries?.province?.includes('Thành phố')
        ? generateCode(queries?.province?.replace('Thành phố ', ''))
        : generateCode(queries?.province?.replace('Tỉnh', ''))

      await db.Label.findOrCreate({
        where: { code: labelCode },
        defaults: {
          code: labelCode,
          value: label,
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
      await db.Overview.update(
        {
          area: label,
          type: queries?.categoryName,
          target: queries?.target,
          bonus: 'Tin thường',
        },

        {
          where: { id: post.overviewId },
        },
      )
      await db.Images.update(
        {
          image: queries?.images,
        },

        {
          where: { id: post.imagesId },
        },
      )
      await db.Attribute.update(
        {
          price:
            +currentPrice < 1
              ? `${queries.priceNumber} đồng/tháng`
              : `${currentPrice} triệu/tháng`,
          acreage: `${queries.areaNumber} m2`,
          published: moment(new Date()).format('DD/MM/YYYY'),
          hashtag,
        },

        {
          where: { id: post.attributesId },
        },
      )

      const [updatedRows] = await db.Post.update(
        {
          title: queries.title,
          description: JSON.stringify(queries.description),
          address: address,
          categoryCode: queries.categoryCode,
          provinceCode: queries.provinceCode,
          priceNumber: currentPrice,
          areaNumber: currentArea,
          labelCode: labelCode,
        },
        {
          where: { id: postId },
        },
      )
      if (updatedRows) {
        console.log(`Updated rows: ${updatedRows}`)
        resolve({
          err: 0,
          msg: 'Update post success',
        })
      } else {
        resolve({
          err: 1,
          msg: 'Post not found',
        })
      }
    } catch (error) {
      reject(error)
    }
  })
function removeNullValues(obj) {
  for (const key in obj) {
    if (obj[key] === null) {
      delete obj[key]
    } else if (typeof obj[key] === 'object') {
      removeNullValues(obj[key])
    }
  }
}
