import * as labelsController from '../controllers/labelsController'
import express from 'express'

const router = express.Router()
router.get('/all', labelsController.getLabel)

export default router
