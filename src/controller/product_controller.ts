import { NextFunction, Request, Response } from "express"
import { ProductService } from "../service/product_service"
import catchAsync from "../utils/CatchAsync"
import SendResponce from "../utils/Responce"
import httpStatus from "http-status"

const createProduct = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.body)
    const result = await ProductService.createProductService(req.body)
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Added new Product Successfully",
        data:result
    })
})
const getAllProduct = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await ProductService.getAllProductService()
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Show All Product Successfully",
        data:result
    })
})
const getSingleProduct = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const {id}=req.params
    const result = await ProductService.getSingleProductService(id)
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Get Single Id Show Successfully",
        data:result
    })
})
const updateproductStock = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const {id}=req.params
    const result = await ProductService.updateProductService(id,req.body)
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"update stock Successfully",
        data:result
    })
})


export const ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateproductStock
}