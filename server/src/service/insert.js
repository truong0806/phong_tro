import db from '../models'
const moment = require('moment')
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { v4 as v4 } from 'uuid'
import chothuematbang from '../../data/chothuematbang.json'
import chothuecanho from '../../data/chothuecanho.json'
import nhachothue from '../../data/nhachothue.json'
import chothuephongtro from '../../data/chothuephongtro.json'
import timnguoioghep from '../../data/timnguoioghep.json'
import genarateCode from '../ultils/generateCode'
import { dataArea, dataPrice } from '../ultils/data'
import { getNumberFromString } from '../ultils/common'
require('dotenv').config()

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12))

const dataBody = [
  {
    header: chothuephongtro.header,
    body: chothuephongtro.body,
    code: 'CTPT',
  },
  {
    header: chothuematbang.header,
    body: chothuematbang.body,
    code: 'CTMB',
  },
  {
    header: chothuecanho.header,
    body: chothuecanho.body,
    code: 'CTCH',
  },
  {
    header: nhachothue.header,
    body: nhachothue.body,
    code: 'NCT',
  },
  {
    header: timnguoioghep.header,
    body: timnguoioghep.body,
    code: 'TNOG',
  },
]

export const insertService = () => {
  new Promise(async (resolve, reject) => {
    try {
      dataBody.forEach((cate) => {
        cate.header.forEach(async (category) => {
          await db.Category.findOrCreate({
            where: { code: category?.code },
            defaults: {
              code: category?.code,
              value: category?.value,
              header: category?.header,
              subheader: category?.subheader,
              count: 0,
            },
          })
        })
      })
      createPriceAndArea()
      const provinceCodes = []
      const labelCodes = []
      dataBody.forEach((cate) => {
        cate.body.forEach(async (item) => {
          let postId = v4()
          let attributesId = v4()
          let userId = v4()
          let overviewId = v4()
          let imagesId = v4()
          let provinceCode = genarateCode(
            item?.header?.address?.split(',')?.slice(-1)[0].trim(),
          )
          provinceCodes?.every((item) => item?.code !== provinceCode) &&
            provinceCodes?.push({
              code: provinceCode,
              value: item?.header?.address?.split(',')?.slice(-1)[0].trim(),
            })
          let labelCode = genarateCode(item?.header?.class?.classType).trim()
          labelCodes?.every((item) => item?.code !== labelCode) &&
            labelCodes?.push({
              code: labelCode,
              value: item?.header?.class?.classType?.trim(),
            })
          let desc = JSON.stringify(item?.mainContent?.content)
          let currentArea = getNumberFromString(
            item?.header?.attributes?.acreage,
          )
          console.log(
            `🚀 ~ file: insert.js:92 ~ cate.body.forEach ${item?.header?.attributes?.acreage} currentArea: ${currentArea}`,
          )
          let currentPrice = getNumberFromString(
            item?.header?.attributes?.price,
          )
          console.log(
            `🚀 ~ file: insert.js:95 ~ cate.body.forEach ${item?.header?.attributes?.price} currentPrice: ${currentPrice}`,
          )
          const dateString = item?.overview?.content.find(
            (i) => i.name === 'Ngày đăng:',
          ).value
          const dateCreate = moment(
            dateString,
            'dddd, HH:mm DD/MM/YYYY',
            'vi',
          ).toDate()
          await db.Attribute.findOrCreate({
            where: { id: attributesId },
            defaults: {
              id: attributesId,
              price: item?.header?.attributes?.price,
              acreage: item?.header?.attributes?.acreage,
              published: item?.header?.attributes?.published,
              hashtag: item?.header?.attributes?.hashtag,
            },
          }),
            await db.Images.findOrCreate({
              where: { id: imagesId },
              defaults: {
                id: imagesId,
                image: JSON.stringify(item?.images),
              },
            })
          await db.Label.findOrCreate({
            where: { code: labelCode },
            defaults: {
              code: labelCode,
              value: item?.header.class.classType,
            },
          })

          await db.Overview.findOrCreate({
            where: {
              id: item?.overview?.content.find((i) => i.name === 'Mã tin:')
                ?.value,
            },
            defaults: {
              id: overviewId,
              code: item?.overview?.content.find((i) => i.name === 'Mã tin:')
                ?.value,
              area: item?.overview?.content.find((i) => i.name === 'Khu vực')
                ?.value,
              type: item?.overview?.content.find(
                (i) => i.name === 'Loại tin rao:',
              )?.value,
              target: item?.overview?.content.find(
                (i) => i.name === 'Đối tượng thuê:',
              )?.value,
              bonus: item?.overview?.content.find((i) => i.name === 'Gói tin:')
                ?.value,
              created: dateCreate,
              expired: item?.overview?.content.find(
                (i) => i.name === 'Ngày hết hạn:',
              ).value,
            },
          })

          await db.User.findOrCreate({
            where: {
              phone: item?.contact?.content.find(
                (i) => i.name === 'Điện thoại:',
              )?.value,
            },
            defaults: {
              name: item?.contact?.content.find((i) => i.name === 'Liên hệ:')
                ?.value,
              password: hashPassword('truong911'),
              phone: item?.contact?.content.find(
                (i) => i.name === 'Điện thoại:',
              )?.value,
              zalo: item?.contact?.content.find((i) => i.name === 'Zalo')
                ?.value,
            },
          })
          await db.Post.findOrCreate({
            where: {
              id: postId,
              title: item?.header?.title,
              address: item?.header?.address,
            },
            defaults: {
              id: postId,
              title: item?.header?.title,
              star: item?.header?.star,
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
        })
      })
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

      resolve('Add data to database Done')
    } catch (error) {
      reject(error)
    }
  })
}

export const createPriceAndArea = () =>
  new Promise(async (resolve, reject) => {
    try {
      for (const item of dataPrice) {
        await db.Price.findOrCreate({
          where: { code: item.code },
          defaults: {
            code: item.code,
            value: item.value,
          },
        })
      }
      for (const item2 of dataArea) {
        await db.Area.findOrCreate({
          where: { code: item2.code },
          defaults: {
            code: item2.code,
            value: item2.value,
          },
        })
      }
      resolve('Ok')
    } catch (error) {
      reject(error)
    }
  })
