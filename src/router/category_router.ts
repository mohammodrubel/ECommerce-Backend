import express from 'express'
import { CategoryController } from '../controller/category_controller'
import validationRequest from '../middleware/validation_requiest_'
import categoryZodValidation from '../validation/category_zod_validation'

const router = express.Router()
router.post(
  '/create-category',
  validationRequest(categoryZodValidation),
  CategoryController.createCategory,
)
router.get('/', CategoryController.getAllCategory)

export const categoryRouter = router
