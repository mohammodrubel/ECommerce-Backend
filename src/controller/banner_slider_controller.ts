import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/CatchAsync"
import SendResponce from "../utils/Responce"
import httpStatus from "http-status"
import { BannerSliderService } from "../service/banner_slider_service"

const createBannerSlider = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await BannerSliderService.createBannerSliderService(req.body)
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Added new Banner Slider Successfully",
        data:result
    })
})
const getAllBannerSlider = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await BannerSliderService.getAllBannerSliderService()
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Show All Banner Slider Successfully",
        data:result
    })
})
const getSingleBannerSlider = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const {id}=req.params
    const result = await BannerSliderService.getSingleBannerSliderService(id)
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Get Single Banner Slider Show Successfully",
        data:result
    })
})


export const BannerSliderController = {
    createBannerSlider,
    getAllBannerSlider,
    getSingleBannerSlider
}