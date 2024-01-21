import asyncHandler from "../../utils/asyncHandler.js";
import { validateById } from "../../helpers/validateById.js";
import { getProfile } from "../../helpers/getProfile.js";



const getOneProfile = asyncHandler(async (req, res) => {
    // validate profie id 
    const id = validateById(req)



    //query profile in db 
    const Profile = await getProfile(id)


    res.status(200).json({
        success: true,
        Profile: Profile
    })



})




export {
    getOneProfile
}