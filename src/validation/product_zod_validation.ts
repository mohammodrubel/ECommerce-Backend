import { z } from 'zod'

// export const T_review = z.object({
//     userId: z.string(), // Assuming userId is a string in your Mongoose model
//     comment: z.string(),
//     userRating: z.number(),
// });
 // reviews: z.array(T_review),

export const productZodValidation = z.object({
  body: z.object({
    productName: z.string(),
    category: z.enum(['Headphone', 'Laptop', 'Gaming', 'Monitor', 'Tablet Pc', 'Printer', 'Camera', 'Sound System']),
    price: z.number(),
    currency: z.string(),
    image: z.string(),
    description: z.string(),
    totalStock: z.number(),
  })
})


