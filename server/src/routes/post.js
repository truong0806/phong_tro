import * as postController from '../controllers/postController'
import express from 'express'

const router = express.Router()
router.get('/all', postController.getPost)
router.get('/limit', postController.getPostLimit)
router.get('/category', postController.getPostsByCategory)

export default router
