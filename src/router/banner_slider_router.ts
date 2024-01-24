import express from 'express'
import validationRequest from '../middleware/validation_requiest_'
import bannerSliderValidation from '../validation/banner_slider_zod_validation'
import { BannerSliderController } from '../controller/banner_slider_controller'
import auth from '../middleware/auth'
import { USERROLE } from '../interface/Global_interface'

const router = express.Router()
router.post(
  '/create-banner-slider',
  validationRequest(bannerSliderValidation),
  BannerSliderController.createBannerSlider,
)
router.get('/',auth(USERROLE.admin), BannerSliderController.getAllBannerSlider)

export const BannerSliderRouter = router
