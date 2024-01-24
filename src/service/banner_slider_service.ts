import { T_Banner_Slider } from "../interface/banner_slider"
import { BannerSlider } from "../model/banner_slider"

const createBannerSliderService = async (payload:T_Banner_Slider)=>{
    const result = await BannerSlider.create(payload)
    return result
}
const getAllBannerSliderService = async ()=>{
    const result = await BannerSlider.find({})
    return result
}
const getSingleBannerSliderService = async (id:string)=>{
    const result = await BannerSlider.findById(id)
    return result
}


export const BannerSliderService = {
    createBannerSliderService,
    getAllBannerSliderService,
    getSingleBannerSliderService
} 
