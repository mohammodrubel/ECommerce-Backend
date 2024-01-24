import { T_Registration } from "../interface/registration"
import { Registration } from "../model/registration_model"

const createRegistration = async (payload:T_Registration)=>{
    const result = await Registration.create(payload)
    return result
}
const getAllRegisterUser = async ()=>{
    const result = await Registration.find({})
    return result
}
const getSingleRegisterUser = async (id:string)=>{
    const result = await Registration.findById(id)
    return result
}


export const RegisterationService = {
    createRegistration,
    getAllRegisterUser,
    getSingleRegisterUser,
} 
