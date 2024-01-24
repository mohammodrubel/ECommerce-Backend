import { T_Offer } from "../interface/offer_interface"
import { Offer } from "../model/offer_model"

const createOfferService = async (payload:T_Offer)=>{
    const result = await Offer.create(payload)
    return result
}
const getAllOfferService = async ()=>{
    const result = await Offer.find({})
    return result
}
const getSingleOfferService = async (id:string)=>{
    const result = await Offer.findById(id)
    return result
}


export const ProductOffer = {
    createOfferService,
    getAllOfferService,
    getSingleOfferService
} 
