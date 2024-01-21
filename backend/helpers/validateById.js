import { idSchema } from "../validationschema/userValidationSchema.js";
import CustomError from "../utils/CustomError.js";
const validateById = (req) => {

    const { id } = req.params;
    // error handling
    const { error } = idSchema.validate(id);
    if (error)
      throw new CustomError(error.message, error.code || 401, error.stack);
  
    return id;
  };
  

  export {
    validateById
  }

  