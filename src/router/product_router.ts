import express from 'express'
import { ProductController } from '../controller/product_controller'
import validationRequest from '../middleware/validation_requiest_'
import { productZodValidation } from '../validation/product_zod_validation'

const router = express.Router()
    router.post('/create-product',validationRequest(productZodValidation),ProductController.createProduct)
    router.get('/',ProductController.getAllProduct)
    router.get('/:id',ProductController.getSingleProduct)
    router.put('/updatestocks/:id',ProductController.updateproductStock)



export const productRouter = router 
