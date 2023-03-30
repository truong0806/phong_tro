import axios from 'axios'
import db from '../models'
import bcrypt from 'bcrypt'
import { v4 as uuidv4, v4 } from 'uuid'
import chothuecanho from '../../data/chothuecanho.json'
const dataBody = chothuecanho.body
import genarateCode from '../ultils/generateCode'
require('dotenv').config()

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12))

export const insertService = () =>
  new Promise(async (resolve, reject) => {
    try {
      dataBody.forEach(async (item) => {
        let postId = v4()
        let attributesId = v4()
        let userId = v4()
        let overviewId = v4()
        let imagesId = v4()
        let labelCode = genarateCode(4)
        let desc = JSON.stringify(item?.mainContent?.content)
        await db.Post.create({
          id: postId,
          title: item?.header?.title,
          star: item?.header?.star,
          labelCode,
          address: item?.header?.address,
          attributesId,
          categoryCode: 'CTCH',
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
          code: item?.overview?.content.find((i) => i === 'Mã tin:').content,
          area: item?.overview?.content.find((i) => i === 'Khu vực').content,
          type: item?.overview?.content.find((i) => i === 'Loại tin rao:')
            .content,
          target: item?.overview?.content.find((i) => i === 'Đối tượng thuê:')
            .content,
          bonus: item?.overview?.content.find((i) => i === 'Gói tin:').content,
          create: item?.overview?.content.find((i) => i === 'Ngày đăng:')
            .content,
          expire: item?.overview?.content.find((i) => i === 'Ngày hết hạn:')
            .content,
        })
        await db.User.create({
          name: item?.contact?.content.find((i) => i === 'Liên hệ:').content,
          password: hashPassword('truong911'),
          phone: item?.contact?.content.find((i) => i === 'Điện thoại:')
            .content,
          zalo: item?.contact?.content.find((i) => i === 'Zalo'),
        })
      })
      resolve('Add data to database Done')
    } catch (error) {
      reject(error)
    }
  })
