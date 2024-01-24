import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/CatchAsync"
import SendResponce from "../utils/Responce"
import httpStatus from "http-status"
import { RegisterationService } from "../service/registration_service"

const createRegristrationController = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await RegisterationService.createRegistration(req.body)
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.CREATED,
        message:"Regristration Successfully",
        data:result
    })
})
const getAllRegristrationController = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await RegisterationService.getAllRegisterUser()
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Show All Regristration User Successfully",
        data:result
    })
})
const getSingleRegristrationController = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const {id}=req.params
    const result = await RegisterationService.getSingleRegisterUser(id)
    SendResponce(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"Get Single Regristration Show Successfully",
        data:result
    })
})


export const RegistrationController = {
    createRegristrationController,
    getAllRegristrationController,
    getSingleRegristrationController
}