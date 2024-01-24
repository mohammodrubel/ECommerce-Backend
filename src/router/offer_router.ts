import express from 'express'
import validationRequest from '../middleware/validation_requiest_'
import offerValidation from '../validation/offer_validateion'
import { OfferController } from '../controller/offer_controller'

const router = express.Router()
router.post(
  '/create-offer',
  validationRequest(offerValidation),
  OfferController.createOffer,
)
router.get('/', OfferController.getAllOffer)

export const OfferRouter = router
