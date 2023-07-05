import * as areasController from '../controllers/areasController'
import express from 'express'

const router = express.Router()
router.get('/all', areasController.getArea)

export default router
