import * as postController from '../controllers/postController'
import express from 'express'
import requireToken from '../middleware/requireToken'
const router = express.Router()

router.get('/all', postController.getPost)
router.get('/limit', postController.getPostLimit)
router.get('/getpostwithlabel', postController.getPostWithLabel)
router.get('/limit-admin', requireToken, postController.getPostLimitAdmin)
router.post('/create',requireToken, postController.createPost)
router.delete('/delete',requireToken, postController.deletePost)
router.post('/update',requireToken, postController.updatePost)

export default router
