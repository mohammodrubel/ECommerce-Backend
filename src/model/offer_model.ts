import { Schema, model } from "mongoose";
import { T_Offer } from "../interface/offer_interface";

const offerSchema = new Schema<T_Offer>({
    programName:{
        type:String,
        required:true 
    },
    couponCode:{
        type:String,
        required:true 
    },
    percentage:{
        type:String,
        required:true 
    },
    programDate:{
        type:String,
        required:true 
    },
})

export const Offer = model<T_Offer>('Offer',offerSchema)