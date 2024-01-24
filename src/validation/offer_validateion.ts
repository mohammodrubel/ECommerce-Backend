import { z } from 'zod'

const offerValidation = z.object({
  body: z.object({
    programName: z.string(),
    percentage: z.string(),
    couponCode: z.string(),
    programDate: z.string(),
  }),
})



export default offerValidation