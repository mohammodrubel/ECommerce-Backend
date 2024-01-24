import { z } from "zod";

const RegistrationValidation = z.object({
    body:z.object({
        email:z.string(),
        password:z.string(),
        role:z.string().optional(),
        isDeleted:z.boolean().optional()
    })
})

export default RegistrationValidation