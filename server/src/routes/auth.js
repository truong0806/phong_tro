import express from 'express'
import * as authController from '../controllers/authController'


const router = express.Router()

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post("/refreshtoken", authController.refreshToken);
router.delete("/refreshtoken", authController.refreshTokenDelete);

export default router