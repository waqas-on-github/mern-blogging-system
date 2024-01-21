import asyncHandler from "../../utils/asyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import Prisma from "../../prisma.js";
import { validateById } from "../../helpers/validateById.js";
import { getProfile } from "../../helpers/getProfile.js";


const getOneProfile = asyncHandler(async(req, res) => {
 // validate profie id 
const id = validateById(req) 


//check profle exists 
await getProfile(id)

//delete profile in db 
const Profile = await Prisma.profile.delete({ 
    where : {
        id : parseInt(id)
    }
})


if(!Profile) throw new CustomError(" cannot delete your Profile" , 401 , "line 22 delete Profile") 



res.status(200).json({
    success: true , 
    Profile : Profile
})

 

})




export{
    getOneProfile
}