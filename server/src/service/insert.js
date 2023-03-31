import db from '../models'
const moment = require('moment')
import bcrypt from 'bcrypt'
import { v4 as uuidv4, v4 } from 'uuid'
import chothuematbang from '../../data/chothuematbang.json'
import chothuecanho from '../../data/chothuecanho.json'
import nhachothue from '../../data/nhachothue.json'
import chothuephongtro from '../../data/chothuephongtro.json'
import genarateCode from '../ultils/generateCode'
require('dotenv').config()

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12))
const dataBody = [
  {
    body: chothuephongtro.body,
    code: 'CTPT',
  },
  {
    body: chothuematbang.body,
    code: 'CTMB',
  },
  {
    body: chothuecanho.body,
    code: 'CTCH',
  },
  {
    body: nhachothue.body,
    code: 'NCT',
  },
]
export const insertService = () =>
  new Promise(async (resolve, reject) => {
    try {
      dataBody.forEach((cate) => {
        cate.body.forEach(async (item) => {
          let postId = v4()
          let attributesId = v4()
          let userId = v4()
          let overviewId = v4()
          let imagesId = v4()
          let labelCode = genarateCode(4)
          let desc = JSON.stringify(item?.mainContent?.content)
          const dateString = item?.overview?.content.find(
            (i) => i.name === 'Ngày đăng:',
          ).value
          const dateCreate = moment(
            dateString,
            'dddd, HH:mm DD/MM/YYYY',
            'vi',
          ).toDate()
          await db.Post.create({
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
          })
          await db.Attribute.create({
            id: attributesId,
            price: item?.header?.attributes?.price,
            acreage: item?.header?.attributes?.acreage,
            published: item?.header?.attributes?.published,
            hashtag: item?.header?.attributes?.hashtag,
          })
          await db.Images.create({
            id: imagesId,
            image: JSON.stringify(item?.images),
          })
          await db.Label.create({
            code: labelCode,
            value: item?.header.class.classType,
          })
          await db.Overview.create({
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
          })
          await db.User.create({
            name: item?.contact?.content.find((i) => i.name === 'Liên hệ:')
              ?.value,
            password: hashPassword('truong911'),
            phone: item?.contact?.content.find((i) => i.name === 'Điện thoại:')
              ?.value,
            zalo: item?.contact?.content.find((i) => i.name === 'Zalo')?.value,
          })
        })
      })
      labelCodes?.forEach(async (item) => {
        await db.Label.create(item)
      })
      resolve('Add data to database Done')
    } catch (error) {
      reject(error)
    }
  })
