import CustomError  from '../utils/CustomError.js'
import { MulterError } from "multer";

const errorHandler = (err, req, res, next) => {
  console.error('Error message:', err); // Log the error message
  
  if (err instanceof CustomError) {
    // do acc to custom error  
    return res.status(500).json({
      sucess: false,
      error: err.message,
      code : err.code , 
      stack : err.stack
    });
  }

  if (err) {
    if (
      err.name === "PrismaClientKnownRequestError" )

       {

      return res.status(500).json({
        success: false,
        err:  "prisma error",
        message: err.message,
        stack :  err.stack , 
        name : err.name
      });
    }
     
    if (err instanceof MulterError) {
      res.status(400).json({ 
        success : false ,
        message: "File upload error by multer" ,
        error : err.message,
        stack : err.stack
       });
        
    }
    
    return res.status(err.code || 500).json({
      sucess: false,
      error: err.message,
      stack: err.stack,
    });
  }
};

export { errorHandler };