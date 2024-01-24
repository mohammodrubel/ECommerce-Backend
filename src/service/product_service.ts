import { T_product } from "../interface/product_interface"
import { Product } from "../model/product_model"

const createProductService = async (payload:T_product)=>{
    const result = await Product.create(payload)
    return result
}
const getAllProductService = async ()=>{
    const result = await Product.find({})
    return result
}
const getSingleProductService = async (id:string)=>{
    const result = await Product.findById(id)
    return result
}
type stocks = {
    totalStock:number
}
const updateProductService = async (id:string,data:stocks)=>{
    const result = await Product.findByIdAndUpdate(
        id,
        data,
        {new:true}
    )
    return result
}


export const ProductService = {
    createProductService,
    getAllProductService,
    getSingleProductService,
    updateProductService
} 
