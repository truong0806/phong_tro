import axios from 'axios'
import db from '../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'
import chothuephongtro from '../../data/data_Chothuephongtro.json'
import chothuecanho from '../../data/data_Chothuecanho.json'
import chothuematbang from '../../data/data_Chothuematbang.json'
import nhachothue from '../../data/data_Nhachothue.json'
import Header from './../../../client/src/containers/Public/Header';
const dataBody = chothuephongtro.body
require('dotenv').config()

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12))

export const insert = () =>
  new Promise(async (resolve, reject) => {
    try {
      dataBody.forEach(async (item) => {
        await db.Post.create({
            title: item.mainContent.header.title,
            star: item.mainContent.header.star,
            labelCode: DataTypes.STRING,
            address: DataTypes.STRING,
            attributesId: DataTypes.STRING,
            categoryCode: DataTypes.STRING,
            description: DataTypes.TEXT,
            userId: DataTypes.STRING,
            overviewId: DataTypes.STRING,
            imagesId: DataTypes.STRING
        })
      })
      resolve()
    } catch (error) {
      reject(error)
    }
  })
