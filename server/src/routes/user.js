import * as userController from '../controllers/userController'
import express from 'express'
import requireToken from '../middleware/requireToken'

const router = express.Router()
router.use(requireToken)
router.get('/getUserCurrent', userController.getUser)

export default router
