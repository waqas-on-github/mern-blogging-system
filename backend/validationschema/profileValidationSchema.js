import Joi from "joi";


const profileValidationSchema = Joi.object({ 


  firstname  :Joi.string().required()     ,
  lastname   :Joi.string().required()     ,
  avatar     :Joi.string().required()     ,
  userId     :Joi.number().required()     


})


const profileUpdateValidationSchema = Joi.object({ 


  firstname  :Joi.string()     ,
  lastname   :Joi.string()     ,
  avatar     :Joi.string()     ,
  userId     :Joi.number()     


})


export {
    profileValidationSchema,
    profileUpdateValidationSchema
}