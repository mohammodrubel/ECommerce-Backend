import { Schema, model } from "mongoose";
import { T_Banner_Slider } from "../interface/banner_slider";

const bannerSliderSchema = new Schema<T_Banner_Slider>({
    title:{
        type:String,
        required:true, 
    },
    description:{
        type:String,
        required:true, 
    },
    image:{
        type:String,
        required:true, 
    }
},{
    timestamps:true
})


export const BannerSlider = model<T_Banner_Slider>('bannerSlider',bannerSliderSchema)