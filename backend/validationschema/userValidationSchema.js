import Joi from "joi";



const validateUserSchema = Joi.object({
    username        : Joi.string().required(),
    email           : Joi.string().required(),
    password        : Joi.string().required(),
    isVerified      :  Joi.boolean()
    
  
}) 




const userLoginSchema = Joi.object({

    username : Joi.string(),
    email: Joi.string(),
    password: Joi.string().required(),
  }).xor('username', 'email')



const idSchema = Joi.number().integer().required();



export {
    validateUserSchema,
    userLoginSchema, 
    idSchema
}