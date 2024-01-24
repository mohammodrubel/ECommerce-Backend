import { Schema, model } from "mongoose";
import { T_category } from "../interface/category_interface";

const categorySchema = new Schema<T_category>({
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


export const Category = model<T_category>('category',categorySchema) 