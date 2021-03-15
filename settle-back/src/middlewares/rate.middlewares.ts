import Joi from "joi";

export const validateRate = {
   validate: {
      payload: Joi.object({
          pair: Joi.string().required(),
          rate: Joi.number().required(),
          fee: Joi.number().required(),
          amount: Joi.number().required(),
          applied: Joi.number().required()
        }).options({ allowUnknown: true })
      }
}