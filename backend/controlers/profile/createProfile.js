import asyncHandler from "../../utils/asyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import Prisma from "../../prisma.js";
import { sanitizeData } from "../../helpers/sanitizeData.js";
import { profileValidationSchema } from "../../validationschema/profileValidationSchema.js";
import { checkVerifiedUser } from "../../helpers/verifiedUserExists.js";






const createProfile = asyncHandler(async(req, res ) => {

// validate input 
const {error} = profileValidationSchema.validate(req.body) 
if(error) throw new CustomError(error.message , error.code , error.stack)
//sanitize inputs 
const sanitizedData = sanitizeData(req.body)
// check is user exists for whome you are creating profile and is he verified his account 
await checkVerifiedUser(sanitizedData.userId)


// insert record into db 

const Profile = await insertProfileRecordInDb(sanitizedData)


//send responce back

res.status(201).json({
    success: true ,
    profile : Profile
})




})



const insertProfileRecordInDb = async(data ) => {

    const dbResponce = await Prisma.profile.create({
        data : {...data}
    })

    if(!dbResponce) throw new CustomError("failed to insert record in db " , 401 , "createProfile line 42")

    return dbResponce
}


export{
    createProfile
}