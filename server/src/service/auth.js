import axios from 'axios'
import db from '../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { v4 } from 'uuid'
require('dotenv').config()

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12))

function generateKeyPair() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, // Adjust the key length as needed (e.g., 2048, 4096)
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  })

  return { publicKey, privateKey }
}
const { publicKey, privateKey } = generateKeyPair()
export const registerService = ({ phone, password, name }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { phone },
        defaults: {
          phone,
          name,
          password: hashPassword(password),
          id: v4(),
          // publickey: publicKey,
        },
      })
      const token =
        response[1] &&
        jwt.sign(
          { id: response[0].id, phone: response[0].phone },
          process.env.SECRET_KEY,
          {
            expiresIn: '2d',
          },
        )

      resolve({
        err: token ? 0 : 2,
        msg: token
          ? 'Register is successfully !'
          : 'Phone number has been aldready used !',
        token: token || null,
        // publicKey: publicKey,
        // privateKey: privateKey,
      })
    } catch (error) {
      reject(error)
    }
  })
export const loginService = ({ phone, password }) =>
  new Promise(async (resolve, reject) => {
    console.log(phone)
    try {
      const response = await db.User.findOne({
        where: { phone },
        raw: true,
      })
      const isCorrectPassword =
        response && bcrypt.compareSync(password, response.password)
      const token =
        isCorrectPassword &&
        jwt.sign(
          { id: response.id, phone: response.phone },
          process.env.SECRET_KEY,
          {
            expiresIn: '2d',
          },
        )
      resolve({
        err: token ? 0 : 2,
        msg: token
          ? 'Login is successfully !'
          : response
          ? 'Password is wrong'
          : 'Phone number is not found',
        token: token || null,
      })
    } catch (error) {
      reject(error)
    }
  })
