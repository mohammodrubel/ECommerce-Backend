import { Schema, model } from 'mongoose'
import { T_product } from '../interface/product_interface'

const productSchema = new Schema<T_product>(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      enum: [
        'Headphone',
        'Laptop',
        'Gaming',
        'Monitor',
        'Tablet Pc',
        'Printer',
        'Camera',
        'Sound System',
      ],
      required: true,
    },
    quantity:{
      type: Number,
      required: true,
      default:0
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    totalStock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Product = model<T_product>('product', productSchema)
