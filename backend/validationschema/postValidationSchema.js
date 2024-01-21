import Joi from "joi";
import { categorys } from "../utils/constents.js";


const createPostValidationSchema = Joi.object({ 

    title     : Joi.string().required(),
    text      : Joi.string().required(),
    category  : Joi.string().valid(...Object.values(categorys)).required(),
    profileId : Joi.number().required(),


})






export {
    createPostValidationSchema
}