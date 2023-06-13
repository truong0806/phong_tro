import db from '../models'
const moment = require('moment')
import bcrypt from 'bcrypt'
import { v4 as uuidv4, v4 } from 'uuid'
import chothuematbang from '../../data/chothuematbang.json'
import chothuecanho from '../../data/chothuecanho.json'
import nhachothue from '../../data/nhachothue.json'
import chothuephongtro from '../../data/chothuephongtro.json'
import genarateCode from '../ultils/generateCode'
import { dataArea, dataPrice } from '../ultils/data'
import { getNumberFormString } from '../ultils/common'
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
]
export const insertService = () =>
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
            },
          })
        })
      })
      dataBody.forEach((cate) => {
        cate.body.forEach(async (item) => {
          let postId = v4()
          let attributesId = v4()
          let userId = v4()
          let overviewId = v4()
          let imagesId = v4()
          let labelCode = genarateCode(item?.header?.class?.classType).trim()
          let desc = JSON.stringify(item?.mainContent?.content)
          let currentArea = getNumberFormString(
            item?.header?.attributes?.acreage,
          )
          let currentPrice = getNumberFormString(
            item?.header?.attributes?.price,
          )
          const dateString = item?.overview?.content.find(
            (i) => i.name === 'Ngày đăng:',
          ).value
          const dateCreate = moment(
            dateString,
            'dddd, HH:mm DD/MM/YYYY',
            'vi',
          ).toDate()
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
              attributesId,
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
            },
          })

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
        })
      })
      await createPriceAndArea()
      resolve('Add data to database Done')
    } catch (error) {
      reject(error)
    }
  })

export const createPriceAndArea = () =>
  new Promise(async (resolve, reject) => {
    try {
      for (const item of dataPrice) {
        await db.Price.create({
          code: item.code,
          value: item.value,
        })
      }
      for (const item2 of dataArea) {
        await db.Area.create({
          code: item2.code,
          value: item2.value,
        })
      }
      resolve('Ok')
    } catch (error) {
      reject(error)
    }
  })
