import Joi from "joi";

export const validateGetUser = {
   validate: {
        headers: Joi.object({
          name: Joi.string().required()
        }).options({ allowUnknown: true })
      }
}