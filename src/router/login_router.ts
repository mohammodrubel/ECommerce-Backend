import express from 'express'
import validationRequest from '../middleware/validation_requiest_'
import loginValidation from '../validation/login_validation'
import { LoginController } from '../controller/login_controller'
import refreshTokenValidation from '../validation/refreshTokenValidation'

const router = express.Router()
router.post('/login', validationRequest(loginValidation), LoginController.login)
router.post(
  '/refresh-token',
  validationRequest(refreshTokenValidation),
  LoginController.refreshTokenControler,
)

export const LoginRouter = router
