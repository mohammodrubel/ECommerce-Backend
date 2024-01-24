import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/CatchAsync"
import SendResponce from "../utils/Responce"
import httpStatus from "http-status"
import { ProductCategory } from "../service/category_service"
import { ProductOffer } from "../service/offer_service"

const createOffer = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.body)
    const result = await ProductOffer.createOfferService(req.body)
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Added new Offer Successfully",
        data:result
    })
})
const getAllOffer = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await ProductOffer.getAllOfferService()
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Show All Offer Successfully",
        data:result
    })
})
const getSingleOffer = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const {id}=req.params
    const result = await ProductOffer.getSingleOfferService(id)
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Get Single Offer Show Successfully",
        data:result
    })
})


export const OfferController = {
    createOffer,
    getAllOffer,
    getSingleOffer
}