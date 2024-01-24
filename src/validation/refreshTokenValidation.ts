import { z } from 'zod'

const refreshTokenValidation = z.object({
  cookies: z.object({
    refreshToken: z.string({ required_error: 'refreshtoken is required' }),
  }),
})

export default refreshTokenValidation
