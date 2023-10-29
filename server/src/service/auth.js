import db from '../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { v4 } from 'uuid'
import moment from 'moment'
import { createToken } from '../middleware/refreshToken'
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
      const accessToken =
        response[1] &&
        jwt.sign(
          { id: response[0].id, phone: response[0].phone },
          process.env.SECRET_KEY,
          {
            expiresIn: `${process.env.JWT_EXPIRATION}s`,
          },
        )
      let refreshToken = await createToken(response[0].phone, response[0].id)
      resolve({
        err: accessToken ? 0 : 2,
        msg: accessToken
          ? 'Register is successfully !'
          : 'Phone number has been aldready used !',
        accessToken: accessToken || null,
        refreshToken: refreshToken || null,
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
        const isCorrectPassword =
          response && bcrypt.compareSync(password, response.password)
        const accessToken =
          isCorrectPassword &&
          jwt.sign(
            { id: response.id, phone: response.phone },
            process.env.SECRET_KEY,
            {
              expiresIn: `${process.env.JWT_EXPIRATION}s`,
            },
          )
        const refreshToken = await createToken(response.phone, response.id)
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
        })
      }
    } catch (error) {
      reject(error)
    }
  })
