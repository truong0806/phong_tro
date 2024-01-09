import express from 'express'
import * as insertController from '../controllers/insertController'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/', insertController.insert)

export default router
