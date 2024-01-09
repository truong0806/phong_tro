import * as provinceController from '../controllers/provinceController'
import express from 'express'

const router = express.Router()
router.get('/all', provinceController.getProvince)

export default router
