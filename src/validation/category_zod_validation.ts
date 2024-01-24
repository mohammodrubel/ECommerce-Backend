import {z} from 'zod'


const categoryZodValidation = z.object({
    body:z.object({
        name:z.string()
    })
})

export default categoryZodValidation