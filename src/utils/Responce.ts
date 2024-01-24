import { Response } from "express";

type T_Responce <T> = {
    success:boolean;
    message:string;
    statusCode:number;
    data:T
}


const SendResponce =<T> (res:Response,data:T_Responce<T>)=>{
    res.status(data?.statusCode).json({
        success:data?.success,
        message:data?.message,
        statusCode:data?.statusCode,
        data:data
    })
}

export default SendResponce