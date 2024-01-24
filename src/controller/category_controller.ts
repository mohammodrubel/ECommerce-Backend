import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/CatchAsync"
import SendResponce from "../utils/Responce"
import httpStatus from "http-status"
import { ProductCategory } from "../service/category_service"

const createCategory = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await ProductCategory.createCategoryService(req.body)
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Added new Category Successfully",
        data:result
    })
})
const getAllCategory = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await ProductCategory.getAllCategoryService()
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Show All Category Successfully",
        data:result
    })
})
const getSingleCategory = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const {id}=req.params
    const result = await ProductCategory.getSingleCategoryService(id)
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Get Single Category Show Successfully",
        data:result
    })
})


export const CategoryController = {
    createCategory,
    getAllCategory,
    getSingleCategory
}