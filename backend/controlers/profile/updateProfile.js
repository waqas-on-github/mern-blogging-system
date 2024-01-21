import asyncHandler from "../../utils/asyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import Prisma from "../../prisma.js";
import { validateById } from "../../helpers/validateById.js";
import { getProfile } from "../../helpers/getProfile.js";
import { sanitizeData } from "../../helpers/sanitizeData.js";
import { profileUpdateValidationSchema } from "../../validationschema/profileValidationSchema.js";


const updateOneProfile = asyncHandler(async(req, res) => {

// validate input 
const {error} = profileUpdateValidationSchema.validate(req.body) 
if(error) throw new CustomError(error.message , error.code , error.stack)
//sanitize inputs 
const sanitizedData = sanitizeData(req.body)


 // validate profie id 
const id = validateById(req) 


//check profle exists 
await getProfile(id)

//delete profile in db 
const Profile = await Prisma.profile.update({ 
    where : {
        id : parseInt(id)
    }, 
    data: {...sanitizedData}
})


if(!Profile) throw new CustomError(" cannot delete your Profile" , 401 , "line 22 delete Profile") 



res.status(200).json({
    success: true , 
    Profile : Profile
})

 

})




export{
    updateOneProfile
}