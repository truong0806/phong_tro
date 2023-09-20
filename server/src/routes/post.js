import * as postController from '../controllers/postController'
import express from 'express'
import jwt from 'jsonwebtoken'
import requireToken from '../middleware/requireToken'
const router = express.Router()

router.get('/all', postController.getPost)
router.get('/limit', postController.getPostLimit)
router.post('/create', postController.createPost)

export default router
