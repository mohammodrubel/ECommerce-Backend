import { z } from "zod";

const bannerSliderValidation = z.object({
    body:z.object({
        title:z.string(),
        description:z.string(),
        image:z.string(),
    })
})

export default bannerSliderValidation