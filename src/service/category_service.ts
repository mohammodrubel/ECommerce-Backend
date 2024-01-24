import { T_category } from "../interface/category_interface"
import { Category } from "../model/category_model"

const createCategoryService = async (payload:T_category)=>{
    const result = await Category.create(payload)
    return result
}
const getAllCategoryService = async ()=>{
    const result = await Category.find({})
    return result
}
const getSingleCategoryService = async (id:string)=>{
    const result = await Category.findById(id)
    return result
}


export const ProductCategory = {
    createCategoryService,
    getAllCategoryService,
    getSingleCategoryService
} 
