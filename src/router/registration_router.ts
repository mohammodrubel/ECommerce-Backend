import express from 'express'
import validationRequest from '../middleware/validation_requiest_'
import RegistrationValidation from '../validation/registration_validation'
import { RegistrationController } from '../controller/registration_controller'

const router = express.Router()
    router.post('/create-user',validationRequest(RegistrationValidation),RegistrationController.createRegristrationController)
    router.get('/',RegistrationController.getAllRegristrationController)
    router.get('/:id',RegistrationController.getSingleRegristrationController)



export const RegistrationRouter = router 
