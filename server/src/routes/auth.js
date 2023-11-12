import express from 'express'
import * as authController from '../controllers/authController'
import requireToken from '../middleware/requireToken';


const router = express.Router()

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post("/refreshtoken", authController.refreshToken);
router.delete("/refreshtoken", authController.refreshTokenDelete);
router.post("/changepassword",requireToken, authController.changePassword);

export default router