import CustomError from "../utils/CustomError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Prisma from "../prisma.js";



const checkVerified = asyncHandler(async(req , res, next) => {
    const data = req.body || req.params 
    
    console.log(data);


    next()

})

export {
    checkVerified
}



