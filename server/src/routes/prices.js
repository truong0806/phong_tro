import * as pricesController from '../controllers/pricesController'
import express from 'express'

const router = express.Router()
router.get('/all', pricesController.getPrice)

export default router
