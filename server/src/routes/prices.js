import * as prricesController from '../controllers/pricesController'
import express from 'express'

const router = express.Router()
router.get('/all', prricesController.getPrice)

export default router
