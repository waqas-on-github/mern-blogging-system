import asyncHandler from "../../utils/asyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import Prisma from "../../prisma.js";
import { validateById } from "../../helpers/validateById.js";



const getAllPosts =  asyncHandler(async(req, res) => {


    const allPosts = await Prisma.post.findMany({
    }) 

    if(!allPosts) throw new CustomError("post not found " , 401 , "line 11 getall posts")

    res.status(200).json({
        success : true , 
        posts : allPosts
    })

})




export {getAllPosts}