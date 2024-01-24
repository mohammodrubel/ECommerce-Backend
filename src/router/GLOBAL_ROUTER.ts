import {Router} from 'express'
import { productRouter } from './product_router';
import { categoryRouter } from './category_router';
import { BannerSliderRouter } from './banner_slider_router';
import { OfferRouter } from './offer_router';
import { RegistrationRouter } from './registration_router';
import { LoginRouter } from './login_router';


const router = Router()

    const myRouter = [
        {path:'/products',route:productRouter},
        {path:'/category',route:categoryRouter},
        {path:'/bannerslider',route:BannerSliderRouter},
        {path:'/offer',route:OfferRouter},
        {path:'/auth',route:RegistrationRouter},
        {path:'/auth',route:LoginRouter},
        
    ]

    myRouter.forEach((route) => router.use(route.path, route.route));

export default router 