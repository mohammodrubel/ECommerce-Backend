import httpStatus from "http-status"
import catchAsync from "../utils/CatchAsync"
import SendResponce from "../utils/Responce"
import { loginService } from "../service/login_service"
import config from "../config"

const login = catchAsync(async(req,res)=>{
    const result = await loginService.loginusers(req.body)
    const {refreshToken,accessToken} = result
    res.cookie('refreshToken',refreshToken,{
        secure:config.node_env === 'production',
        httpOnly:true
    })
    SendResponce(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'user login successfully',
        data:{
            accessToken
        } 
    })
})
const refreshTokenControler = catchAsync(async(req,res)=>{
    const {refreshToken}=req.cookies
    const result = await loginService.refreshTokenService(refreshToken)
    
    SendResponce(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'AccessToken retrived successfully',
        data:result
    })
})


export const LoginController = {
    login,
    refreshTokenControler
}