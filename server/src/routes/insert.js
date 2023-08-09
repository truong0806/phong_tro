import express from 'express'
import * as insertController from '../controllers/insertController'
import jwt from 'jsonwebtoken'

const router = express.Router()

function verifyToken(req, res, next) {
  const token = req.header('Authorization')
  console.log('🚀 ~ file: insert.js:10 ~ verifyToken ~ publicKey:', publicKey)
  if (!token) {
    return res.status(401).json({ message: 'JWT must be provided' })
  }
  jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Err', err: err })
    } else {
      console.log('decoded:', decoded)
      next()
    }
  })
}
router.post('/', insertController.insert)

export default router
