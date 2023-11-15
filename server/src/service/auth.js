import db from '../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { v4 } from 'uuid'
import moment from 'moment'
import { createToken } from '../middleware/refreshToken'
import { generateAccessToken } from '../middleware/jwt'
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
export const registerService = ({ phone, password, name }) =>
  new Promise(async (resolve, reject) => {
    try {
      const userId = v4()
      const response = await db.User.findOrCreate({
        where: { phone },
        defaults: {
          phone,
          name,
          password: hashPassword(password),
          id: userId,
          // publickey: publicKey,
        },
      })
      console.log('🚀 ~ file: auth.js:43 ~ newPromise ~ response:', response)
      const accessToken = response[1] && generateAccessToken(userId, phone)
      let refreshToken = await createToken(response[0].phone, response[0].id)
      resolve({
        err: accessToken ? 0 : 2,
        msg: accessToken
          ? 'Register is successfully !'
          : 'Phone number has been aldready used !',
        accessToken: accessToken || null,
        refreshToken: accessToken ? refreshToken : null,
        // publicKey: publicKey,
        // privateKey: privateKey,
      })
    } catch (error) {
      reject(error)
    }
  })
export const loginService = ({ phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { phone },
        raw: true,
      })
      if (response === null) {
        resolve({
          err: 2,
          msg: 'Wrong login name or password',
          accessToken: null,
          refreshToken: null,
        })
      } else {
        console.log('🚀 ~ file: auth.js:74 ~ newPromise ~ response:', response)

        const isCorrectPassword =
          response && bcrypt.compareSync(password, response.password)

        const accessToken =
          isCorrectPassword && generateAccessToken(response.id, response.phone)
        console.log(
          '🚀 ~ file: auth.js:84 ~ newPromise ~ accessToken:',
          accessToken,
        )

        const refreshToken = await createToken(response.id, response.phone)
        await db.RefreshToken.destroy({
          where: {
            userId: response.id,
          },
        })

        await db.RefreshToken.create({
          id: v4(),
          userId: response.id,
          token: refreshToken,
          expiryDate: moment().add(1, 'minutes').toDate(), // hạn của token là 1 ngày
        })

        resolve({
          err: accessToken ? 0 : 2,
          msg: accessToken
            ? 'Login is successfully !'
            : response
            ? 'Password is wrong'
            : 'Phone number is not found',
          accessToken: accessToken || null,
          refreshToken: refreshToken || null,
          user: {
            id: response.id,
            name: response.name,
            phone: response.phone,
            zalo: response.zalo,
          },
        })
      }
    } catch (error) {
      reject(error)
    }
  })

export const changePasswordService = (user, queries) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log('id user', user.id)
      console.log('queries', queries)
      const id = user.id
      const response = await db.User.findOne({
        where: { id },
        raw: true,
      })
      if (response === null) {
        resolve({
          err: 1,
          msg: 'User not found',
        })
      } else {
        const isCorrectPassword =
          response && bcrypt.compareSync(queries.oldPassword, response.password)
        console.log(
          '🚀 ~ file: auth.js:140 ~ newPromise ~ isCorrectPassword:',
          isCorrectPassword,
        )
        if (!isCorrectPassword) {
          resolve({
            err: 1,
            msg: 'Wrong old password',
          })
        } else {
          const updatedRows = await db.User.update(
            {
              password: hashPassword(queries.password),
            },
            {
              where: { id },
            },
          )
          console.log(
            '🚀 ~ file: auth.js:155 ~ newPromise ~ updatedRows:',
            updatedRows,
          )
          resolve({
            err: updatedRows ? 0 : 1,
            msg: updatedRows
              ? 'Update password success'
              : 'Update password failure',
          })
        }
      }
    } catch (error) {
      reject(error)
    }
  })
