import * as categoryController from '../controllers/categoryController'
import express from 'express'

const router = express.Router()
router.get('/all', categoryController.getCategory)

export default router
