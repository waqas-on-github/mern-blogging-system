import asyncHandler from "../../utils/asyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import Prisma from "../../prisma.js";
import { sanitizeData } from "../../helpers/sanitizeData.js";
import { getProfile } from "../../helpers/getProfile.js";
import { createPostValidationSchema } from "../../validationschema/postValidationSchema.js";


const createPost = asyncHandler(async(req, res) => {


// validate input 
const {error} = createPostValidationSchema.validate(req.body) 
if(error) throw new CustomError(error.message , error.code , error.stack)
//sanitize inputs 
const sanitizedData = sanitizeData(req.body)

// check profile existance 
await getProfile(sanitizedData.profileId)

//create post 

const createdPost = await insertPostDataInDb(sanitizedData )


res.status(201).json({
    success: true ,
    post : createdPost
})




})



const insertPostDataInDb = async (data ) => {
    const dbResponce = await Prisma.post.create({
        data : {...data}
    })

    if(!dbResponce) throw new CustomError("failed to create porst " , 401 , "line 36 create post")


    return dbResponce
}






export {createPost}