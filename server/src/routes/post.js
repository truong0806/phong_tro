import * as postController from '../controllers/postController'
import express from 'express'
import jwt from 'jsonwebtoken'

function verifyToken(req, res, next) {
  const token = req.header('Authorization')
  console.log('🚀 ~ file: post.js:8 ~ verifyToken ~ token:', token)
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
const router = express.Router()

router.get('/all',  postController.getPost)
router.get('/limit',  postController.getPostLimit)
router.get('/category', postController.getPostsByCategory)

export default router
